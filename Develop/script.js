// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var characters = "~!@#$%^&*()_+{}|<>?/[]";

//If statement between 8 - 128
if (passwordLength < 8 || passwordLength > 128) {
  alert("Please choose a number between 8 and 128");
  generatePassword();
}

// //Does it have lower case?
// var lowerCase = window.confirm("Would you like lower case?");
// if (lowerCase === true) {
//   lower;

// //Add lower case array as one of arrays to password (no else statement)
// }

// //Does it have upper case?
// var upperCase = window.confirm("Would you like lower case?");
// if (upperCase === true)

// //Special characters?
//   var specChar = window.confirm("Would you like a special character?");
// if (specChar === true)

// //Numbers?
//   var pNumber = window.confirm("Would you like a number?");
// if (pNumber === true)



// The for loop will begin ramdon selection of variables
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * emptyPassword.length);
    var randomizedCharacter = emptyPassword[randomIndex];
    password += randomizedCharacter;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// var index = Math.floor(Math.random() * specialCharacter.length);

// var randomSelectedChar = specialCharacter[index];

// console.log("Random Character: ", randomSelectedChar);

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
