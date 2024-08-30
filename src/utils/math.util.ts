import {SumRequest, SumResponse} from "../models/math.model";

export const addNumbers = (number1: number, number2: number): number => {
    return number1 + number2;
}

export const addNumbersTyped = (addRequest: SumRequest): SumResponse => {
    return {
        result: addRequest.number1 + addRequest.number2
    }
}