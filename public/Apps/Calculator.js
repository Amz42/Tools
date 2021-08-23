export const calcText = document.querySelector("#calc_text");
export class Calculator {
    constructor() {
        this.degreeToRadian = (degree) => (degree * Math.PI) / 180;
        this.insert = (inputBoxValue, value) => inputBoxValue + value;
        this.clear = () => "";
        this.backspace = (inputBoxValue) => inputBoxValue.substring(0, inputBoxValue.length - 1);
        this.evaluate = (inputBoxValue) => {
            if (inputBoxValue === "")
                throw new Error("Please enter some expression!!!");
            let result = eval(inputBoxValue);
            if (typeof (result) === "number")
                result = result.toString();
            return result;
        };
        this.math = (inputBoxValue, myFunction) => {
            let val = parseFloat(this.evaluate(inputBoxValue));
            if (myFunction.name === "tan" && val === 90)
                return "Infinity";
            if (["sin", "tan", "cos"].indexOf(myFunction.name) !== -1)
                val = this.degreeToRadian(val);
            return myFunction(val).toString();
        };
    }
    ;
}
