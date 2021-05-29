// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passwordFinal = "";
  var passwordString = "";

  var promptNum = prompt("Enter the required password length (between 8 and 128", "8");
  var passwordLength = parseInt(promptNum);

//checks to see if password is within range
  if(passwordLength < 8 || passwordLength > 128 ) {
    alert("Please choose a number between 8 and 128.")
    return;
  }

  if(confirm("Does it require lower case letters?")) {
    var str2 = "abcdefghijklmnopqrstuvwxyz";
    passwordString = passwordString.concat(str2);
  }
  if(confirm("Does it require upper case letters?")) {
    var str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    passwordString = passwordString.concat(str2);
  }

  if(confirm("Does it require numbers?")) {
    var str2 = "0123456789";
    passwordString = passwordString.concat(str2);
  }

  if(confirm("Does it require special characters?")) {
    var str2 = "!@#$%^&*?";
    passwordString = passwordString.concat(str2);
  }

//checks if user selected a character
  if(passwordString !== "") {
    alert("Thank you for your selection generating now:");
  }
  else{
    alert("Please choose at least one character.");
    return;
  }

  charset = passwordString;
  for (var i = 0, n = charset.length; i < passwordLength; i++) {
    passwordFinal += charset.charAt(Math.floor(Math.random() * n));
  }

  return passwordFinal;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
