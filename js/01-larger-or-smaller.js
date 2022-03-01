// let a = prompt('Enter first number');
// let b = prompt('Enter second number');

// let a
// let b
// a = parseFloat(prompt('Enter 1st number'));
// b = parseFloat(prompt('Enter 2nd number'));

let a = parseInt(prompt('Enter 1st number'));
let b = parseInt(prompt('Enter 2nd number'));

if (a > b) {
    document.write(a)
} else if (a === b) {
    document.write(`The 1st number ${a} and 2nd number ${b} are equal.`)
} else {
    document.write(b)
};
