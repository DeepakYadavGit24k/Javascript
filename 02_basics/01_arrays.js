// Using array literals
const fruits = ['apple', 'banana', 'cherry'];

// Using the Array constructor
const numbers = new Array(1, 2, 3, 4);

// Accessing elements
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'

// Modifying elements
fruits[1] = 'blueberry';
console.log(fruits[1]); // 'blueberry'


// behaves like a stack
fruits.push('date'); // Adds 'date'
console.log(fruits); // ['apple', 'blueberry', 'cherry', 'date']

fruits.pop(); // Removes 'date'
console.log(fruits); // ['apple', 'blueberry', 'cherry']


// all values are shifted bad for machine 
fruits.unshift('avocado'); // Adds 'avocado' to the start
console.log(fruits); // ['avocado', 'apple', 'blueberry', 'cherry']

fruits.shift(); // Removes 'avocado'
console.log(fruits); // ['apple', 'blueberry', 'cherry']

console.log(fruits.includes('apple')); // true

const citrus = fruits.slice(1, 3); // ['blueberry', 'cherry']

// manipulates the original array

fruits.splice(1, 1, 'blueberry'); // Removes 1 element at index 1 and adds 'blueberry'
console.log(fruits); // ['apple', 'blueberry', 'cherry']

// +++++ part 2 +++++