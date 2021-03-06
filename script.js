//Assignment code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Defining variables for array
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specChar = "~!@#$%^&*()_+{}|<>?/[]";
var emptyPassword = "";

//Prompt user to make choices
function charChoice() {
  var upCaseChoice = confirm("Would you like an upper case letter in your password?");
  var lowCaseChoice = confirm("Would you like a lower case letter in your password?");
  var numberChoice = confirm("Would you like a number in your password?");
  var specCharChoice = confirm("Would you like a special character in your password?");

  //If statements to string together user choices. If true, then chosen variable added to charChoice.
  if (upCaseChoice === true) {
    emptyPassword = emptyPassword + upCase;
  }
  if (lowCaseChoice === true) {
    emptyPassword = emptyPassword + lowCase;
  }
  if (numberChoice === true) {
    emptyPassword = emptyPassword + number;
  }
  if (specCharChoice === true) {
    emptyPassword = emptyPassword + specChar;
  }
}

//Generate password function
function generatePassword() {
  //Determine password length when prompted
  var passwordLength = prompt(
    "How long would you like your password to be? Choose between 8 and 128 character."
  );

  //Conditional statement to determine password length and prompt when not chosen within range
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128");
    generatePassword();
  }

  //Calls the function -- isolate within this function
  charChoice();

  //Creates string variable to put final password
  var password = "";

  //The for loop will begin selecting random variables based on password length.
  for (var i = 0; i < passwordLength; i++) {

    //Randomizes character choice and then character based on chosen password length.
    var randomIndex = Math.floor(Math.random() * emptyPassword.length);
    var randomizedCharacter = emptyPassword[randomIndex];

    //Adds random characters to password
    password = password + randomizedCharacter;
  }

  //Returns password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
