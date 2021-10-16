// Variable Values 
pwOptions = [];
passwordLength = [];
special = ["!","'","#","$","%","&","(",")","*","+","-",".","/",";",":","<",">","=","?","@","[","]","{","}","~","^"]
number = [1,2,3,4,5,6,7,8,9,0]
alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write Password Function
function writePassword() {

  // run initial prompt messages 
  let optionsSelected = getPrompt();

  // if initial prompts are correctly completed a password will be generated 
  if (optionsSelected){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}
// Generate Password Function
let generatePassword = function(){

  let uniquePassword = "";

  for(var i = 0; i < passwordLength; i++){
    var randomLetter = Math.floor(Math.random() * pwOptions.length)
    uniquePassword = uniquePassword + pwOptions[randomLetter];
  }
  return uniquePassword;
 }
 // Password Variable Selection Function
let getPrompt = function(){ 

  //reset character choices each time 
  pwOptions = [];

  //ask user how long they'd like their password 
  passwordLength = window.prompt("How many characters would you like your password? Choose between 8 and 128.")

    // if no response is added request for them to try again
    if (passwordLength == "" || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
      window.alert("You need to provide a valid answer. Please try again.");
      getPrompt();
    }
    
    // character selection variables 
    var hasSpecial = window.confirm("Would you like special characters in your password?");
    var hasNumber = window.confirm("Would you like numbers in your password?");
    var hasLower = window.confirm("Would you like lowercase letters in your password?");
    var hasUpper = window.confirm("Would you like uppercase letters in your password?");

    // validate users selctions selections 
    if (!hasSpecial && !hasNumber && !hasLower && !hasUpper){
      window.alert("You must choose at least 1 character type. Please Try again.");
      getPrompt();
    }
    if (hasSpecial){
      pwOptions = pwOptions.concat(special);
    }
    if (hasNumber){
      pwOptions = pwOptions.concat(number);
    }
    if (hasLower){
      pwOptions = pwOptions.concat(alphaLower);
    }
    if (hasUpper){
      pwOptions = pwOptions.concat(alphaUpper);
    }
    return true;
} 



  
