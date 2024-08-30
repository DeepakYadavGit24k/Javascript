// use of this keyword
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // refering the current contest
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage() // output: hitesh
// user.username = "sam" // changing the contest
// user.welcomeMessage() // output: sam

// node environment is empty
// console.log(this); // output: {}


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this); // output: {}
}


// chai()

// arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implecit return
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()