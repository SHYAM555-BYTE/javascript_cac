const accountId = 144553;
let accountEmail = "shyampatel.555555@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountstate
// accountId=2

/*
Prefer not to use var because
of issue in block scope and functional scope
*/

console.log(accountId);
accountEmail = "kll"
accountCity = "kk"
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])
