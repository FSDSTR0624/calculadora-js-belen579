

document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');

   
    let resultado = 0;
   

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

    function add(operando1, operando2) {
        resultado = operando1 + operando2;
        return resultado;
    }

    function substract(operando1, operando2) {
        resultado = operando1 - operando2;
        return resultado;
    }

    function product(operando1, operando2) {
        resultado = operando1 * operando2;
        return resultado;
    }

    function division(operando1, operando2) {
        if (operando2 === 0) {
            throw new Error("División por cero");
        }
        resultado = operando1 / operando2;
        return resultado;
    }

    function calculate() {
        try {
            const expresion = display.value;
            let resultado;

            const operadores = ['+', '-', '*', '/'];
            let operacion = null;
            let operando1, operando2;

            for (let operador of operadores) {
                if (expresion.includes(operador)) {
                    operacion = operador;
                    [operando1, operando2] = expresion.split(operador).map(Number);
                    break;
                }
            }

            if (operacion === null) {
                throw new Error("Operación no válida");
            }

            switch (operacion) {
                case '+':
                    resultado = add(operando1, operando2);
                    break;
                case '-':
                    resultado = substract(operando1, operando2);
                    break;
                case '*':
                    resultado = product(operando1, operando2);
                    break;
                case '/':
                    resultado = division(operando1, operando2);
                    break;
                default:
                    throw new Error("Operación no válida");
            }

            display.value = resultado;
        } catch {
            display.value = "Error";
        }
    }

    function calcularraiz() {
        try {
            let value = parseFloat(display.value);
            if (isNaN(value)) {
                throw new Error("Valor no válido");
            }
            display.value = Math.sqrt(value);
        } catch {
            display.value = "Error";
        }
    }

    window.appendToDisplay = appendToDisplay;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;
    window.calcularraiz = calcularraiz;
});



