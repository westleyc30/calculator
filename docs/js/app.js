// NUMBERS
document.querySelector('#one').onclick   = function(){setDisplay(1);};
document.querySelector('#two').onclick   = function(){setDisplay(2);};
document.querySelector('#three').onclick = function(){setDisplay(3);};
document.querySelector('#four').onclick  = function(){setDisplay(4);};
document.querySelector('#five').onclick  = function(){setDisplay(5);};
document.querySelector('#six').onclick   = function(){setDisplay(6);};
document.querySelector('#seven').onclick = function(){setDisplay(7);};
document.querySelector('#eight').onclick = function(){setDisplay(8);};
document.querySelector('#nine').onclick  = function(){setDisplay(9);};
document.querySelector('#zero').onclick  = function(){setDisplay(0);};

// MATH
document.querySelector('#add').onclick      = function(){setOperator(' + ')};
document.querySelector('#subtract').onclick = function(){setOperator(' - ')};
document.querySelector('#multiply').onclick = function(){setOperator(' * ')};
document.querySelector('#divide').onclick   = function(){setOperator(' / ')};
document.querySelector('#decimal').onclick  = function(){setDecimal()};

document.querySelector('#equals').onclick = function(){evaluate()};
document.querySelector('#clear').onclick = function(){
    document.querySelector('.display').value = '';
    document.querySelector('.formula').innerHTML = '';
};



function setDisplay(num) {
    document.querySelector('.display').value += num;
    opInput = false;
    console.log(document.querySelector('.display').value);
    console.log(opInput);
}

function setOperator(op) {
    if (opInput === true) {
        return console.log('Can\'t pass two operators');
    } else {
        document.querySelector('.display').value += op;
        opInput = true;
        decimalAdded = false;
    }
}
function setDecimal() {
    if (decimalAdded === true) {
        return console.log('Cannot have 2 decimals in a number');
    } else {
        document.querySelector('.display').value += '.';
        decimalAdded = true;
    }
}

function evaluate() {
    var inputString = document.querySelector('.display');
    var input = inputString.value;
    var answer = eval(input);
    inputString.value = answer;
    document.querySelector('.formula').innerHTML = input;
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
