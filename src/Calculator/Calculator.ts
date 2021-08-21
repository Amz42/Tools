const calcText = document.querySelector("#calc_text") as HTMLInputElement;
export class Calculator{
    constructor(){};

    degreeToRadian = (degree: number) => (degree * Math.PI) / 180;
    
    insert = (value: string) => calcText.value += value;
    
    clear = () => calcText.value = "";
    
    backspace = () => calcText.value = calcText.value.substring(0, calcText.value.length - 1);
    
    evaluate = () => {
        try{
            calcText.value = eval(calcText.value);
        } catch(error) {
            alert(`Error: ${error}`);
        }
    };
    
    math = (myFunction: Function) => {
        this.evaluate();

        try{
            let val = parseFloat(calcText.value);

            if(myFunction.name === "tan" && val === 90){
                calcText.value = "infinite";
                return;
            }
            
            if(["sin", "tan", "cos"].indexOf(myFunction.name) !== -1){
                console.log(myFunction.name, "dtr applied");
                val = this.degreeToRadian(val);
            }
            
            calcText.value = myFunction(val).toString();
        }catch(error){
            alert(`Error: ${error}`);
        }
    }
}

export type calculatorFunctionality = {
    id: string,
    method: Function
};