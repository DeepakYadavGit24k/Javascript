// var has global scope 
//var c = 300

// global scobe
let a = 300
if (true) {
    // local scope 
    let a = 10
    const b = 20
    // console.log("INNER: ", a); // output: 10
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// nested function
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // this will show error

     two()

}

// one()

// nested if
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error
}

// console.log(username); // error


// ++++++++++++++++++ interesting ++++++++++++++++++

// declaring functions in defferent ways -> Hosting

// it runs properly
console.log(addone(5))

function addone(num){
    return num + 1
}

// it would not run
addTwo(5)

// expression 
// another way of writing function 
const addTwo = function(num){
    return num + 2
}