"use strict";
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const stringResults = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const a = num1.value;
    const b = num2.value;
    const res = add(+a, +b);
    numResults.push(res);
    const stringResult = add(a, b);
    stringResults.push(stringResult);
    printResult({ val: res, timeStamp: new Date() });
    console.log(numResults, stringResults);
});
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('it worked ');
    }, 1000);
});
myPromise.then((res) => {
    console.log(res.split('w'));
});
