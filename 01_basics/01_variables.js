// cannot be changes 
const accountId = 144553




// there are two type of variables in java script
// let does not have the problem of scope
let accountEmail = "hitesh@google.com"
// it has problem of scope
// prefer not to use var
var accountPassword = "12345"

// not recommended to use
accountCity = "Jaipur"

// undefines
let accountState

// accountId = 2
accountEmail = "aefa"
accountPassword = "23454"
accountCity  = "lucknow"

console.log(accountId)
// printing multiple lines
console.table([accountId,accountEmail, accountCity,accountPassword, accountState])