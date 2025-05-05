
function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function deleteLast() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.length > 1 ? current.slice(0, -1) : '0';
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value.replace(/÷/g, '/').replace(/×/g, '*'));
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
