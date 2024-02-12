const accountID = 711067;
let accountEmail = "vaibhav@google.com";
var accountPassword = "12345";

accountCity = "Bhopal";

let accountState;

// accountID = 123456;  not allowed 

accountEmail = "vaibhav01@v.com";
accountPassword = "67890";
accountCity = "Pune";

console.log(accountID);

/*
Prefer to not use var
because of issue in block scope and functional scope
*/
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);