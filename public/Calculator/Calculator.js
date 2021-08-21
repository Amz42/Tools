const calcText = document.querySelector("#calc_text");
export class Calculator {
    constructor() {
        this.degreeToRadian = (degree) => (degree * Math.PI) / 180;
        this.insert = (value) => calcText.value += value;
        this.clear = () => calcText.value = "";
        this.backspace = () => calcText.value = calcText.value.substring(0, calcText.value.length - 1);
        this.evaluate = () => {
            if (calcText.value === "") {
                alert("Please enter some expression!!!");
                return;
            }
            try {
                calcText.value = eval(calcText.value);
            }
            catch (error) {
                alert(`Error: ${error}`);
            }
        };
        this.math = (myFunction) => {
            this.evaluate();
            try {
                let val = parseFloat(calcText.value);
                if (myFunction.name === "tan" && val === 90) {
                    calcText.value = "infinite";
                    return;
                }
                if (["sin", "tan", "cos"].indexOf(myFunction.name) !== -1) {
                    console.log(myFunction.name, "dtr applied");
                    val = this.degreeToRadian(val);
                }
                calcText.value = myFunction(val).toString();
            }
            catch (error) {
                alert(`Error: ${error}`);
            }
        };
    }
    ;
}
