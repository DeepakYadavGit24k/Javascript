
// Immediately Invoked Function Expressions (IIFE)
 
// begining "(" are create a block
// last for immediate call 
// named iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ";" is reqiuired here
 
// ()() definition 

// writing the function a arroe function
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // passing the argument
