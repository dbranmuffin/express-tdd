import express from 'express';
import {addNumbers, addNumbersTyped} from "./utils/math.util";
import {SumRequest} from "./models/math.model";

const app = express();
const port = 3000;

app.use(express.json());

app.use((req, _res, next) => {
    console.log(new Date().toLocaleString() + ': ' + req.method + ' ' + req.path);
    console.log(JSON.stringify(req.body));
    next();
})

app.get('/', (_req, res) => {
    res.send('Hello, World!');
});

app.post('/sum', (req, res) => {
    res.json({result: addNumbers(req.body.number1, req.body.number2)});
});

app.post('/sum/typed', (req, res) => {
    res.json(addNumbersTyped(req as unknown as SumRequest));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});