import { Calculator } from '../src/Apps/Calculator';

describe("Calculator Tests", () => {
    const calculator = new Calculator();

    // DegreeToRadian function
    it("should convert degree to radian", () => {
        expect(calculator.degreeToRadian(0)).toEqual(0);
        expect(calculator.degreeToRadian(360)).toEqual(6.283185307179586);
        expect(calculator.degreeToRadian(90)).toEqual(1.5707963267948966);
        expect(calculator.degreeToRadian(1)).toEqual(0.017453292519943295);
        expect(calculator.degreeToRadian(-10)).toEqual(-0.17453292519943295);
    });

    // Insert function
    it("should append inputed value to input box's value", () => {
        expect(calculator.insert("","")).toEqual("");
        expect(calculator.insert("738", "+")).toEqual("738+");
        expect(calculator.insert("984%","234")).toEqual("984%234");
    });

    // Clear function
    it("should always return empty string", () => {
        expect(calculator.clear()).toEqual("");
    });

    // Backspace function
    it("should remove last character from string", () => {
        expect(calculator.backspace("%")).toEqual("");
        expect(calculator.backspace("458-783")).toEqual("458-78");
        expect(calculator.backspace("345+27*89")).toEqual("345+27*8");
    });

    // Evaluate function
    it("should return evaluated value of expression", () => {
        expect(calculator.evaluate("71%0")).toEqual("NaN");
        expect(calculator.evaluate("9/0")).toEqual("Infinity");
        expect(calculator.evaluate("1234+4568")).toEqual("5802");
        expect(calculator.evaluate("85/96*423")).toEqual("374.53125");
        expect(() => calculator.evaluate("237897+*+-")).toThrow("Unexpected token '*'");
        expect(() => calculator.evaluate("")).toThrow("Please enter some expression!!!");
    });

    // Math function
    it("sholud return evaluated value using provided math function", () => {
        expect(calculator.math("90", Math.tan)).toEqual("Infinity");
        expect(calculator.math("57%96",Math.log10)).toEqual("1.7558748556724915");
        expect(() => calculator.math("458+", Math.log10)).toThrow("Unexpected end of input");
        expect(() => calculator.math("", Math.log10)).toThrow("Please enter some expression!!!");
    });
});