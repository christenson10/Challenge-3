// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Variables
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specChar = "~!@#$%^&*()_+{}|<>?/[]";
var emptyPassword = '';

//Prompt user to make choices
function charChoice () {
  var upCaseChoice = confirm("Would you like an upper case letter in your password?");
  var lowCaseChoice = confirm("Would you like a lower case letter in your password?");
  var numberChoice = confirm("Would you like a number in your password?");
  var specCharChoice = confirm("Would you like a special character in your password?");

  //If statements to string together user choices, adds tt
    if (upCaseChoice){
      emptyPassword += upCaseChoice
    }
    if (lowCaseChoice){
      emptyPassword += lowCaseChoice
    }
    if (numberChoice){
      emptyPassword += numberChoice
    }
    if (specCharChoice){
      emptyPassword += specCharChoice
    }
}

//Generate password function
function generatePassword(){

//Determine password length when prompted
  var passwordLength = prompt("How long would you like your password to be? Choose between 8 and 128 character.");  //If statement to qualify between 8 - 128
  
  //If chosen outside of the parameters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128");
    generatePassword();
  }

  //Calls the function
  charChoice();

  //Creates string variable for final password
  var password = "";
  
  //The for loop will begin selecting random variables
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * emptyPassword.length);
    var randomizedCharacter = emptyPassword[randomIndex];
    password += randomizedCharacter;
  }

  //Returns password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);