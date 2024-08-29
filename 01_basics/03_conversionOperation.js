
// try with null, undefined, true, false, string

let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let isLoogedIn = 1
let booleanIsLoggedIn = Boolean(booleanIsLoggedIn)