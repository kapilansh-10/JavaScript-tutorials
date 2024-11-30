const accountId = 144553
let accountEmail = "kapilansh@google.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;

//accountId = 2 // not allowed
console.log(accountId);

accountEmail = "kp@kp.com"
accountPassword = "69696969"
accountCity = "Banglore"


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use var
because of issue in block scope and functional scope
*/