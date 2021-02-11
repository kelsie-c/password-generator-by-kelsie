// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var lowerCaseChosen;
var upperCaseChosen;
var numberChosen;
var specialChosen;

// criteria arrays
var criteriaChosen = ["lowerCase", "upperCase", "numbers", "special"];
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = " !#\"$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var selectCharacter;
var newPassword = [];
var passwordInvalid;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  criteriaChosen = ["lowerCase", "upperCase", "numbers", "special"];
  
  function generatePassword() {
    // variable for password length
    passwordLength = prompt("How long would you like your password to be?");

    //check for valid length
    if (passwordLength >= 8 && passwordLength <= 128) {
        selectCriteria();
    } else {
      passwordInvalid = window.alert("Password length must be a number between 8 and 128.");
      return;
    }
  } 

  function selectCriteria() {
    // boolean variables for chosen criteria
    lowerCaseChosen = confirm("Would you like your password to include lowercase characters?");
    upperCaseChosen = confirm("Would you like your password to include uppercase characters?");
    numberChosen = confirm("Would you like your password to include numbers characters?");
    specialChosen = confirm("Would you like your password to include special characters?");
      
    // edit criteria array to reflect which variables selected.
    if (specialChosen === false) {
      criteriaChosen.splice(3, 1);
    }

    if (numberChosen === false) {
      criteriaChosen.splice(2, 1);
    }

    if (upperCaseChosen === false) {
      criteriaChosen.splice(1, 1);
    }

    if (lowerCaseChosen === false) {
      criteriaChosen.splice(0, 1);
    } 

    if (criteriaChosen.length === 0) {
      passwordInvalid = window.alert("Password must inlcude at least one character type.");
      return;
    }
          
    createPassword();
  }

  function createPassword() {
    for (i = 0; i < passwordLength; i++) {
      //choose a random criteria
      selectCharacter = Math.floor(Math.random() * criteriaChosen.length);

      //choose a random character and add it to the password array
      if (criteriaChosen[selectCharacter] === "lowerCase") {
        newPassword[i] = lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
      } else if (criteriaChosen[selectCharacter] === "upperCase") {
        newPassword[i] = upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
      } else if (criteriaChosen[selectCharacter] === "numbers") {
        newPassword[i] = numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
      } else if (criteriaChosen[selectCharacter] === "special") {
        newPassword[i] = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
      }
    
    }   
  
  }

  // at a certain point, make sure each chosen criteria has been used at least once

  // return password;
  password = newPassword.toString();
  password = password.replace(/,/g, '');
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);