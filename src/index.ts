import { digitalClock } from './Apps/DigitalClock.js';
import { Calculator,calculatorFunctionality } from './Apps/Calculator.js';
import {
    resetTimer, lapTimer, startOrPause,
    startTimerBtn, lapTimerBtn, resetTimerBtn
} from './Apps/Stopwatch.js';
import {
    convert, outputBox, inputBox,
    injectUnits, quantities, quantityTypeSelector,
    unit1Selector, unit2Selector
} from './Apps/UnitConverter.js';

// Digital Clock
digitalClock();
setInterval(digitalClock, 1000);


// Calculator
const calculator = new Calculator();

const inputButtons = document.querySelectorAll(".calc-insert-btn") as unknown as HTMLInputElement[];
inputButtons.forEach(btn => {
    btn.addEventListener('click', () => calculator.insert(btn.value));
});

const calculatorFunctions: calculatorFunctionality[] = [
    {
        selector: "#calc-evaluate-btn",
        method: calculator.evaluate
    },{
        selector: "#calc-clear-btn",
        method: calculator.clear
    },{
        selector: "#calc-bksp-btn",
        method: calculator.backspace
    },{
        selector: "#calc-log-btn",
        method: calculator.math,
        param: Math.log10
    },{
        selector: "#calc-sqrt-btn",
        method: calculator.math,
        param: Math.sqrt
    },{
        selector: "#calc-sin-btn",
        method: calculator.math,
        param: Math.sin
    },{
        selector: "#calc-cos-btn",
        method: calculator.math,
        param: Math.cos
    },{
        selector: "#calc-tan-btn",
        method: calculator.math,
        param: Math.tan
    }
];

calculatorFunctions.forEach(item => {
    const btn = document.querySelector(item.selector) as HTMLInputElement;
    btn.addEventListener('click', () => item.method(item.param));
});


// Stopwatch
startTimerBtn.addEventListener('click', () => startOrPause());
lapTimerBtn.addEventListener('click', () => lapTimer());
resetTimerBtn.addEventListener('click', () => resetTimer());


// Unit Converter
Object.entries(quantities).forEach(([quantityName,]) => {
    const option = document.createElement("option");
    option.className = "uc";
    option.value = option.innerText = quantityName;
    quantityTypeSelector.appendChild(option);
})

quantityTypeSelector.addEventListener('change', () => {
    injectUnits(quantityTypeSelector.value);
    convert();
});

[inputBox,unit1Selector,unit2Selector].forEach((selector) => {
    ["change", "keyup"].forEach((event) => {
        selector.addEventListener(event, () => convert());
    })
});