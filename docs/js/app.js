const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')

const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const decimal = document.querySelector('#decimal');

const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

const display = document.querySelector('.display');
const formula = document.querySelector('.formula')
// const add = document.querySelector('#')

// NUMBERS
one.onclick   = function(){setDisplay(1);};
two.onclick   = function(){setDisplay(2);};
three.onclick = function(){setDisplay(3);};
four.onclick  = function(){setDisplay(4);};
five.onclick  = function(){setDisplay(5);};
six.onclick   = function(){setDisplay(6);};
seven.onclick = function(){setDisplay(7);};
eight.onclick = function(){setDisplay(8);};
nine.onclick  = function(){setDisplay(9);};
zero.onclick  = function(){setDisplay(0);};

// MATH
add.onclick      = function(){setOperator(' + ')};
subtract.onclick = function(){setOperator(' - ')};
multiply.onclick = function(){setOperator(' * ')};
divide.onclick   = function(){setOperator(' / ')};
decimal.onclick  = function(){setDecimal()};

equals.onclick = function(){evaluate()};
clear.onclick = function(){
    display.value = '';
    formula.innerHTML = '';
};



function setDisplay(num) {
    display.value += num;
    opInput = false;
    console.log(display.value);
    console.log(opInput);
}

function setOperator(op) {
    if (opInput === true) {
        return console.log('Can\'t pass two operators');
    } else {
        display.value += op;
        opInput = true;
        decimalAdded = false;
    }
}
function setDecimal() {
    if (decimalAdded === true) {
        return console.log('Cannot have 2 decimals in a number');
    } else {
        display.value += '.';
        decimalAdded = true;
    }
}

function evaluate() {
    var inputString = display;
    var input = inputString.value;
    var answer = eval(input);
    formula.innerHTML = input;
    inputString.value = answer;
    console.log(answer);
}
// MATH SELECTORS


// OTHER BUTTON SELECTORS
var elPercent  = document.querySelector('#percent');
var elClear    = document.querySelector('#clear');

var elOutput   = document.querySelector('.output');
var elInput    = document.querySelector('.input');

var decimalAdded = false;
var opInput = true;

window.addEventListener('keydown', function(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57 && e.shiftKey === false) {
        console.log(e)
        setDisplay(e.key)
    } else if ((e.keyCode === 187 && e.shiftKey === false) || e.keyCode === 13) {
        evaluate()
    } else if (e.keyCode === 187 && e.shiftKey === true) {
        setOperator(' + ')
    } else if (e.keyCode === 189) {
        setOperator(' - ')
    } else if (e.keyCode === 56 && e.shiftKey === true) {
        setOperator(' * ')
    } else if (e.keyCode === 191) {
        setOperator(' / ')
    } else if (e.keyCode === 67) {
        display.value = '';
        formula.innerHTML = '';
    } else if (e.keyCode === 190) {
        setDecimal()
    }
});