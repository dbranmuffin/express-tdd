import {addNumbers, addNumbersTyped} from "../utils/math.util";
import {SumRequest} from "../models/math.model";

describe('Math Utils', () => {
    it('Add Numbers', () => {
        const number1 = 4;
        const number2 = 17;
        const actual = addNumbers(number1, number2);
        expect(actual).toEqual(21);
    });

    it('Add Numbers Typed', () => {
        const request: SumRequest = {
            number1: 23,
            number2: 9
        };
        const actual = addNumbersTyped(request);
        expect(actual).toEqual({result: 32});
    });
});