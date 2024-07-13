




document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
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
/*
    function add(operand1, operand2) {
        return operand1 + operand2;
    }

    function subtract(operand1, operand2) {
        return operand1 - operand2;
    }

    function product(operand1, operand2) {
        return operand1 * operand2;
    }

    function division(operand1, operand2) {
        return operand1 / operand2;
    }

    function updateDisplay(value) {
        display.value = value;
    }

   


    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'CLEAR') {
                clearDisplay();
            } else if (value === '=') {
                if (operacion && operando1 !== null) {
                    operando2 = parseFloat(displayValue);
                    switch (operacion) {
                        case '+':
                            resultado = add(operando1, operando2);
                            break;
                        case '-':
                            resultado = subtract(operando1, operando2);
                            break;
                        case '*':
                            resultado = product(operando1, operando2);
                            break;
                        case '/':
                            resultado = division(operando1, operando2);
                            break;
                    }
                    displayValue = resultado.toString();
                    updateDisplay(displayValue);
                    operando1 = resultado; // Guardar resultado como primer operando para futuras operaciones
                    operando2 = 0;
                    operacion = null;
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                operacion = value;
                operando1 = parseFloat(displayValue);
                displayValue = '0'; // Limpiar display para el próximo número
                updateDisplay(displayValue);
            } else {
                appendToDisplay(value);
            }
        });
    });*/

});


