// Assignment code here

// Variable Values 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Number Values 
number = [1,2,3,4,5,6,7,8,9,0]
// Letter Values 
//Lowercase 
alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Start Function to generate password
function generatePassword(){
 // ask for user for a number between 8 & 128 

  // if user doesn't input a number between 8 & 128 need to ask for validation 

  // continue to user inputted variable validation 
  // number
  // character 
  // alpha lowercase 
  // alpha uppercase 

  // if user doesn't choose require validation 



}
 







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
