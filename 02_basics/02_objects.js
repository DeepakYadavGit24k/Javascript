// singleton
// Object.create

// object literals

// creating a symbol
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    // you cannot access this value using "." operator
    // use the square notation
    "full name": "Hitesh Choudhary",
    // using it as a symbol requires a square bracket
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// changing the value
JsUser.email = "hitesh@chatgpt.com"

// freezing makes it impossible to change the key value
// Object.freeze(JsUser)
// no change will be shown
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// functions can be treated as variables
JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());