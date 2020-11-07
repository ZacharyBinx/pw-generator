// added variables for input values
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*(){}[]+<>/,.|~?";
var numerics = "1234567890";
var pwLength = document.querySelector("#length");
var upChar = document.querySelector("#upper");
var lcChar = document.querySelector("#lower");
var specChar = document.querySelector("#special");
var numChar = document.querySelector("#numerics");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// function to check for match in each string when checked
function checkForMatch(strToMatch) {

    // opening if statement finds value of checkbox for upper characters. if checked, performs if statement.
    if (upChar.checked) {

        // if string to match does not include 1 or more upper characters, returns false.
        if (!strToMatch.match(new RegExp("[" + upper + "]+", 'g'))) {
            return false;
        }
    }

    // opening if statement finds value of checkbox for lower characters. if checked, performs if statement.
    if (lcChar.checked) {

        // if string to match does not include 1 or more lower characters, returns false.
        if (!strToMatch.match(new RegExp("[" + lower + "]+", 'g'))) {
            return false;
        }
    }

    // opening if statement finds value of checkbox for special characters. if checked, performs if statement.
    if (specChar.checked) {

        // if string to match does not include at 1 or more special characters, returns false.
        if (!strToMatch.match(new RegExp("[" + special + "]+", 'g'))) {
            return false;
        }
    }

    // opening if statement finds value of checkbox for numerics. if checked, performs if statement.
    if (numChar.checked) {

        // if string to match does not include 1 or more numerics throughout string, returns false.
        if (!strToMatch.match(new RegExp("[" + numerics + "]+", 'g'))) {
            return false;
        }
    }
   
    // string based on checked values includes required characters
    return true;
}

// function to create string of characters used for password
function getCharPool() {

    var poolOfChars = "";

    // adds upper string if box checked value true 
    if (upChar.checked) {
        poolOfChars += upper;
    }

    // adds upper string if box checked value true 
    if (lcChar.checked) {
        poolOfChars += lower;
    }

    // adds upper string if box checked value true 
    if (specChar.checked) {
        poolOfChars += special;
    }

    // adds upper string if box checked value true 
    if (numChar.checked) {
        poolOfChars += numerics;
    }
   
    //returns a string of characters including one or more of the checked values    
    return poolOfChars;
}

// function called under write password
function generatePassword() {

    // variable to return input from number field
    var len = parseInt(pwLength.value);
    var pool = getCharPool();

    // if no checked values, returns message
    if (pool.length === 0) {
        return "Invalid input. Please choose one or more options and length between 8 and 128.";
    }

    // password within length requirements
    if (len >= 8 && len <= 128) {
        
        //password begins as empty string 
        var password = "";

        do {
            
            // on return, clears previous password
            password = "";

            // for loop randomizing characters from final total string 
            for (let i = 0; i < len; i++) {
                password += pool.charAt(Math.random() * pool.length);
            }

        // while loop returns to password when generated password does not include characters per checked boxes 
        } while (!checkForMatch(password));
        return password;
    // else loop shows error message when password length is outside parameters
    } else {
        return "Invalid input. Please choose one or more options and length between 8 and 128.";
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
