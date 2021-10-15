// Assignment code here

// Variable Values 
special = ["!'#$%&()*+-./;:<>=?@[]{}~^"]
number = [1,2,3,4,5,6,7,8,9,0]
alphaLower = ["abcdefghijklmnopqrstuvwxyz"];
alphaUpper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// Variables for all options 
let allOption = special + number + alphaLower + alphaUpper
let option1 = special + number + alphaLower
let option2 = special + number + alphaUpper
let option3 = special + alphaLower + alphaUpper
let option4 = number + alphaLower + alphaUpper
let option5 = special + number
let option6 


// Start Function to generate password
let generatePassword = function(){
  //ask user how long they'd like their password
  let enter = window.prompt("How many characters would you like your password? Choose between 8 and 128.");

  //begin validation of statement
    // if no response is added request for them to try again
    if (enter === "" || enter === null){
      window.alert("You need to provide a valid answer. Please try again.");
      return generatePassword();
    }

    // if number between 8 & 128 is submitted validate other pw inclusions
    if (enter >= 8 && enter <= 128){
      let confirmNumber = window.confirm ("Will this contain numbers?");
      let confirmCharacter = window.confirm ("Will this contain special characters?");
      let confirmAlphaLower= window.confirm ("Will this contain lowercase letters?");
      let confirmAlphaUpper = window.confirm ("Will this contain uppercase letters");
    } 

    // if number outside of range is submitted request for them to try again 
    else {
      window.alert("You need to provide a number between 8 and 128. Please try again.");
      return generatePassword();
    };

    
 };




  
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
