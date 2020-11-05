// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// added variables for checkboxes
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var upper = "ABCDDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var special = "!@#$%^&*(){}[]+<>/,.|~?";
  var numerics = "1234567890";

  passwordText.value = password;

}

// function getRandomUpper() {
//     if (upper === "checked class")
    
//     return upper[Math.floor(Math.random()*upper.length)];
    
// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
