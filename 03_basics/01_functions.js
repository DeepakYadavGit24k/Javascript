// definition of the function
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName ->     function reference 
// sayMyName() -> running function

// function adding two numbers amd printing result
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


// definition -> parameters
// calling functiona -> arguments

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// storing the result in variable 
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) // undefined just logged in
// undefined is treated as false.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// "..." -> here it is called reset operator
// based on use case it is also called spread
// ...num packs all the elements passed to the function
function calculateCartPrice(val1, val2, ...num1){
    // ...num stores multiple values
    // first and second values are stored in val1 and val2
    // rest of the values are stored in num1 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// output: [ 500, 2000 ]



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));