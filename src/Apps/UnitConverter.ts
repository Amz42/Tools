export const quantityTypeSelector = document.querySelector("#uc-property") as HTMLSelectElement;
export const unit1Selector = document.querySelector("#unit-1") as HTMLSelectElement;
export const unit2Selector = document.querySelector("#unit-2") as HTMLSelectElement;
export const inputBox = document.querySelector("#input_box") as HTMLInputElement;
export const outputBox = document.querySelector("#output_box") as HTMLInputElement;

type quantitiesTypes = {
    [key in string] : {
        [key in string] : number
    }
};


export const quantities: quantitiesTypes = {
    "Area": {
        "Inch Sq" : 1,
        "Foot Sq" : 144,
        "Yard Sq" : 1296,
        "Meter Sq" : 1550,
        "Acre" : 6.273e+6,
        "Hectare" : 1.55e+7,
        "Kilometer Sq" : 1.55e+9,
        "Mile Sq" : 4.014e+9,
    },
    "Length" : {
        "Nanometer nm" : 1e-6,
        "Micrometer": 0.001,
        "Milimeter mm" : 1,
        "Centimeter cm" : 10,
        "Inch" : 25.4,
        "Foot Ft" : 304.8,
        "Yard" : 914.4,
        "Meter m" : 1000,
        "Kilometer Km" : 1000000,
        "Mile" : 1.609e+6,
        "Nautical Mile": 1.852e+6,
    },
    "Mass" : {
        "Microgram" : 0.001,
        "Miligram mg": 1,
        "Gram g" : 1000,
        "Ounce" : 28349.5,
        "Pound" : 453592,
        "Kilogram Kg" : 1e+6,
        "Stone" : 6.35e+6,
        "US ton" : 9.072e+8,
        "Tonne" : 1e+9,
        "Imperial ton" : 1.016e+9,
    },
    "Speed" : {
        "Km/hr" : 1,
        "Meter/sec" : 3.6,
        "Mile/hr" : 1.60934,
        "Foot/sec": 1.09728,
        "Knot" : 1.852,
    },
    "Frequency" : {
        "Hz" : 1,
        "Khz" : 1000,
        "Mhz" : 1e+6,
        "Ghz" : 1e+9,
    },
    "Pressure" : {
        "Pascal" : 1,
        "Torr" : 133.322,
        "Pound/Inch Sq" : 6894.76,
        "Bar" : 100000,
        "Standard Atmosphere" : 101325,
    },
    "Time" : {
        "Nanosecond" : 1,
        "Microsecond" : 1000,
        "Milisecond" : 1e+6,
        "Second" : 1e+9,
        "Minute" : 6e+10,
        "Hour" : 3.6e+12,
        "Day" : 8.64e+13,
        "Week" : 6.048e+14,
        "Month" : 2.628e+15,
        "Calendar year" : 3.154e+16,
        "Decade" : 3.154e+17,
        "Century" : 3.154e+18,
    },
};

export const injectUnits = (quantityName: string) => {
    unit1Selector.innerHTML = "";
    unit2Selector.innerHTML = "";

    if(quantityName === "Select a property.........")
        return;

    Object.entries(quantities[quantityName]).forEach(([unit,]) => {
        const unit1option = document.createElement("option");
        unit1option.innerText = unit1option.value = unit;
        unit1Selector.appendChild(unit1option);

        const unit2option = document.createElement("option");
        unit2option.innerText = unit2option.value = unit;
        unit2Selector.appendChild(unit2option);
    });
};

export const convert = () => {
    if(
        quantityTypeSelector.value === "Select a property........." ||
        inputBox.value === ""
    ){
        outputBox.value = "";
        return;
    }

    const scale = quantities[quantityTypeSelector.value];

    let result: (number | string) = (
        ( inputBox.valueAsNumber * scale[unit1Selector.value]) /
        scale[unit2Selector.value]
    );

    if(typeof(result) == "number")
        result = result.toString();

    outputBox.value = result;
}