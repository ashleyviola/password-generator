// Assignment code here

// Variable Values 
special = ["!","'","#","$","%","&","(",")","*","+","-",".","/",";",":","<",">","=","?","@","[","]","{","}","~","^"]
number = [1,2,3,4,5,6,7,8,9,0]
alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

pwOptions = [];

// Start Function to generate password
let generatePassword = function(){

  
 }

let getPrompt = function(){

  //reset character choices each time 

  pwOptions = [];
  //ask user how long they'd like their password 
  let passwordLength = parseInt(window.prompt("How many characters would you like your password? Choose between 8 and 128."))
 
    // if no response is added request for them to try again

    if (passwordLength === "" || passwordLength === null){
      window.alert("You need to provide a valid answer. Please try again.");
      return getPrompt();
    }
    
    // if number between 8 & 128 is submitted validate other pw inclusion
    if (passwordLength >= 8 && passwordLength <= 128){
      if (window.confirm("Would you like special characters in your password?")){
        pwOptions = pwOptions.concat(special);
      }
      if (window.confirm("Would you like special numbers in your password?")){
        pwOptions = pwOptions.concat(number);
      }
      if (window.confirm("Would you like special lowercase letters in your password?")){
        pwOptions = pwOptions.concat(alphaLower);
      }
      if (window.confirm("Would you like special uppercase letters in your password?")){
        pwOptions = pwOptions.concat(alphaUpper);
      }
      return true;
    } 
      // if number outside of range is submitted request for them to try again 
      else {
        window.alert("You need to provide a number between 8 and 128. Please try again.");
        return generatePassword();
    };
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
