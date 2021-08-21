import { digitalClock } from './DigitalClock/DigitalClock.js';
import { Calculator } from './Calculator/Calculator.js';
digitalClock();
setInterval(digitalClock, 1000);
const calculator = new Calculator();
const inputButtons = document.querySelectorAll(".calc-insert-btn");
inputButtons.forEach(btn => {
    btn.addEventListener('click', () => calculator.insert(btn.value));
});
const calculatorFunctions = [
    {
        selector: "#calc-evaluate-btn",
        method: calculator.evaluate
    }, {
        selector: "#calc-clear-btn",
        method: calculator.clear
    }, {
        selector: "#calc-bksp-btn",
        method: calculator.backspace
    }, {
        selector: "#calc-log-btn",
        method: calculator.math,
        param: Math.log10
    }, {
        selector: "#calc-sqrt-btn",
        method: calculator.math,
        param: Math.sqrt
    }, {
        selector: "#calc-sin-btn",
        method: calculator.math,
        param: Math.sin
    }, {
        selector: "#calc-cos-btn",
        method: calculator.math,
        param: Math.cos
    }, {
        selector: "#calc-tan-btn",
        method: calculator.math,
        param: Math.tan
    }
];
calculatorFunctions.forEach(item => {
    const btn = document.querySelector(item.selector);
    btn.addEventListener('click', () => item.method(item.param));
});
