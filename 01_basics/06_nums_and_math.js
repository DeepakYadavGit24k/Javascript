let num = 123.456;

// 1. toFixed - Formats to 2 decimal places
console.log(num.toFixed(2));  // "123.46"

// 2. toPrecision - Formats to 5 total digits
console.log(num.toPrecision(5));  // "123.46"

// 3. toExponential - Converts to exponential notation with 2 decimal places
console.log(num.toExponential(2));  // "1.23e+2"

// 4. isInteger - Checks if the number is an integer
console.log(Number.isInteger(num));  // false

let str = "123.45";

// 5. parseFloat - Converts string to floating-point number
console.log(Number.parseFloat(str));  // 123.45

// 6. parseInt - Converts string to integer
console.log(Number.parseInt(str));    // 123

// 7. isNaN - Checks if the value is NaN
console.log(Number.isNaN(NaN));  // true

console.log(num.toPrecision(2))

const hundreds = 10000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));




// maths

console.log(Math.abs(-5));          // 5
console.log(Math.round(4.6));       // 5
console.log(Math.sqrt(16));         // 4
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.log(1));           // 0
// generates a valur between 0 and 1 inclusive
console.log(Math.random());         // Random number between 0 and 1

// implementing a dice
const min = 0
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)