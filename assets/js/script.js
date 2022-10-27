// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate buttoninput
generateBtn.addEventListener("click", writePassword);

// ---------------My stuff-----------------

function generatePassword() {

  // declaring local variables.
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var amount = prompt("How long would you like the password to be? (8-128 characters)");
  var useable = "";
  var result = "";

  // function to call later - adds variable content to useable variable and one of variable's characters to result
  function rando(variable) {
    useable += variable;
    result += variable.charAt(Math.floor(Math.random() * variable.length));
  };

  // if the first prompt is canceled, prompt will return 'null'.
  if(amount == null) {
    return "Changed your mind?";
  };

  // testing if amount is within parameters, and using !parseInt to catch if it's not a number.
  if(amount < 8 || amount > 128 || !parseInt(amount, 10)) {
    alert("Please enter only a number between 8 and 128");
    return generatePassword();
  };
  
  // prompts for each option, if accepted calls rando function.
  if(confirm("Including lower case letters?")) rando(alpha);

  if(confirm("Including capital letters?")) rando(alpha.toUpperCase());

  if(confirm("Including numbers?")) rando(numeric);

  if(confirm("Including special characters?")) rando(special);

  // ensures one prompt was confirmed.
  if(result.length < 1) {
    alert("Must allow at least one option! Please try again.");
    return generatePassword();
  };

  // interation loops to choose random char within the useable variable.
  while(amount > result.length) {
    result += useable.charAt(Math.floor(Math.random() * useable.length));
  };

  return result;
};
