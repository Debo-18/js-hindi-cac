const accountID = 144553
let accountEmail = "debopratimdam@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountID = 223355 not allowed

// console.log(accountID);

accountEmail = "hc@hc.com"
accountPassword = "225599"
accountCity = "Kolkata"
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);
