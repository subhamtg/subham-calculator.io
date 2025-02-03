let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '';
}

function appendNumber(number) {
    display.textContent += number;
}

function appendOperator(operator) {
    display.textContent += ' ' + operator + ' ';
}

function calculate() {
    try {
        display.textContent = eval(display.textContent.replace(/ /g, ''));
    } catch {
        display.textContent = 'Error';
    }
}