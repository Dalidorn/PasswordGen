// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// My stuff

function generatePassword() {

  var input = prompt("How long would you like the password to be? (8-128 characters)");
  var allowed = {
    alpha: ["abcdefghijklmnopqrstuvwxyz"],
    numeric: ["0123456789"],
    special: ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
    amount: 0,
    accepted: ""
  };
  var truths = 0;
  var result = "";

  if(input == null) {
    return "Changed your mind?";
  }

  if(input < 8 || input > 128 || !parseInt(input, 10)) {
    alert("Please enter only a number between 8 and 128");
    return generatePassword();
  } 
  
  else {
    allowed.amount = input;
    allowed.alpha.push(confirm("Including lower case letters?"))
    allowed.alpha.push(confirm("Including capital letters?"))
    allowed.numeric.push(confirm("Including numbers?"))
    allowed.special.push(confirm("Including special characters?"))
  };

  if(allowed.alpha[1]) {
    allowed.accepted += allowed.alpha[0];
    truths++
    result += allowed.alpha[0].charAt(Math.floor(Math.random() * allowed.alpha[0].length));
  };


  if(allowed.alpha[2]) {
    allowed.accepted += allowed.alpha[0].toUpperCase();
    truths++
    result += allowed.alpha[0].charAt(Math.floor(Math.random() * allowed.alpha[0].length)).toUpperCase();
  };


  if(allowed.numeric[1]) {
    allowed.accepted += allowed.numeric[0];
    truths++
    result += allowed.numeric[0].charAt(Math.floor(Math.random() * allowed.numeric[0].length));
  };


  if(allowed.special[1]) {
    allowed.accepted += allowed.special[0];
    truths++
    result += allowed.special[0].charAt(Math.floor(Math.random() * allowed.special[0].length));
  };


  if(truths < 1) {
    alert("Must allow at least one option! Please try again.");
    return generatePassword();
  };

  for(i = 1; i <= allowed.amount - truths; i++) {
    result += allowed.accepted.charAt(Math.floor(Math.random() * allowed.accepted.length));
  };

  return result;
};
