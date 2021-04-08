
var generateBtn = document.querySelector("#generate");

// Prompt to see how long password is

function generatePassword() {
  var length = prompt("How many characters would you like in your password? (Must be between 8 and 128)");
  var pNumber = confirm("Would you like numbers in your password?");
  var lowerCase = confirm("Would you like lower in your password??");
  var upperCase = confirm("Would you like upper case letters in your password??");
  var specChar = confirm("Would you like special characters in your password??");

//If statement between 8 - 128
  if (length < 8 || length > 128) {
    window.alert('Please choose within 8 and 128')
    }

//Does it have lower case?
    var lowerCase = window.confirm('Would you like lower case?');
    if (lowerCase === true) {
      lower
      //Add lower case array as one of arrays to password (no else statement)
    }
 
//Does it have upper case?
    var upperCase = window.confirm('Would you like lower case?');
    if (upperCase === true) {
    
//Special characters?
    var specChar = window.confirm('Would you like a special character?');
    if (specChar === true) {

//Numbers?
    var pNumber = window.confirm('Would you like a number?');
    if (pNumber === true) {

//Generate password
    for (let i = 0; i < length; i++) {
    const element = array[i];

//Which arrays have been chosen?

//Randomly pick one array

//Randomly pick character from chosen array

//Adding random character to the password

    password = password + GenerateCharacter
  }

//Return password
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// // Assignment code here

// var specialCharacter = ["?", "*", "&", "#", "!", "@"]

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









// Traversy Tutorial

// function getRandomLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
// }

// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
// }

// function getRandomSymbol() {
//   const symbols = "!@#$%^&*?><";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// console.log(getRandomSymbol());


