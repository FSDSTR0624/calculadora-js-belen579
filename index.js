



document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');

    let operando1 = 0;
    let operando2 = 0;
    let resultado = 0;
    let operacion = null;

    function appendToDisplay(value) {
        let displayValue = display.value;
        if (displayValue === "0" && value !== ".") {
            display.value = value;
        } else {
            display.value += value;
        }
    }

    function clearDisplay() {
        display.value = "0";
        operando1 = 0;
        operando2 = 0;
        resultado = 0;
        operacion = null;
    }

    function calculate() {
        try {
            display.value = evaluaroperacion(display.value);
        } catch {
            display.value = "Error";
        }
    }



    function evaluaroperacion(expresion){
        if (!/^[0-9+\-*/(). ]+$/.test(expresion)) {
            throw new Error("Carácteres no validos");
        }

    
        return new Function('return ' + expresion)();

    }

    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;
});


