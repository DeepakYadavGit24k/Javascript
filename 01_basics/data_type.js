//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// even after giving the same value yet they are not same
console.log(id === anotherId);

// last n denotes the bigint
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// Array, Objects, Functions

/*
most improtant thing in javescripts
    objects
    web events
*/

const heros = ["shaktiman", "naagraj", "doga"];

// object
let myObj = {
    name: "hitesh",
    age: 22,
}

// function
const myFunction = function(){
    console.log("Hello world");
}

// to know the type of variable
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// memory types
    // stack (Primitive) - copy
    // Heap (Non-Primitive) - reference

 // objects are created in heap
