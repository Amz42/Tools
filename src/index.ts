import { digitalClock } from './DigitalClock/DigitalClock.js';
import { Calculator,calculatorFunctionality } from './Calculator/Calculator.js';


// Digital Clock
digitalClock();
setInterval(digitalClock, 1000);


// Calculator
const calculator = new Calculator();

const inputButtons = document.querySelectorAll(".calc-insert-btn") as unknown as HTMLInputElement[];
inputButtons.forEach(btn => {
    btn.addEventListener('click', () => calculator.insert(btn.value));
});

const calculatorEvaluateBtn = document.querySelector("#calc-evaluate-btn") as HTMLInputElement;
calculatorEvaluateBtn.addEventListener('click', () => calculator.evaluate());

const calculatorClearBtn = document.querySelector("#calc-clear-btn") as HTMLInputElement;
calculatorClearBtn.addEventListener('click', () => calculator.clear());

const calculatorBackspaceBtn = document.querySelector("#calc-bksp-btn") as HTMLInputElement;
calculatorBackspaceBtn.addEventListener('click', () => calculator.backspace());

const calculatorLogBtn = document.querySelector("#calc-log-btn") as HTMLInputElement;
calculatorLogBtn.addEventListener('click', () => calculator.math(Math.log10));

const calculatorSqrtBtn = document.querySelector("#calc-sqrt-btn") as HTMLInputElement;
calculatorSqrtBtn.addEventListener('click', () => calculator.math(Math.sqrt));

const calculatorSinBtn = document.querySelector("#calc-sin-btn") as HTMLInputElement;
calculatorSinBtn.addEventListener('click', () => calculator.math(Math.sin));

const calculatorCosBtn = document.querySelector("#calc-cos-btn") as HTMLInputElement;
calculatorCosBtn.addEventListener('click', () => calculator.math(Math.cos));

const calculatorTanBtn = document.querySelector("#calc-tan-btn") as HTMLInputElement;
calculatorTanBtn.addEventListener('click', () => calculator.math(Math.tan));