export const calcText = document.querySelector("#calc_text") as HTMLInputElement;
export class Calculator{
    constructor(){};

    degreeToRadian = (degree: number) => (degree * Math.PI) / 180;
    
    insert = (inputBoxValue: string,value: string) => inputBoxValue + value;
    
    clear = () => "";
    
    backspace = (inputBoxValue: string) => inputBoxValue.substring(0, inputBoxValue.length - 1);
    
    evaluate = (inputBoxValue: string) => {
        if(inputBoxValue === "")
            throw new Error("Please enter some expression!!!");

        let result: (number | string) = eval(inputBoxValue);
        if(typeof(result) === "number")
            result = result.toString();
        return result;
    };
    
    math = (inputBoxValue: string, myFunction: Function) => {
        let val = parseFloat(this.evaluate(inputBoxValue));

        if(myFunction.name === "tan" && val === 90)
            return "Infinity";
        
        if(["sin", "tan", "cos"].indexOf(myFunction.name) !== -1)
            val = this.degreeToRadian(val);
        
        return myFunction(val).toString();
    }
}

export type calculatorFunctionality = {
    selector: string,
    method: Function,
    param?: Function
};