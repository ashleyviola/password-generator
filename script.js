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
let generatePassword = function(){
  //ask user how long they'd like their password
  let enter = window.prompt("How many characters would you like your password? Choose between 8 and 128.");
    
  //begin validation of statement
    if (enter === "" || enter === null){
      window.alert("You need to provide a valid answer. Please try again.");
      return generatePassword();
    }
    if (enter >= 8 && enter <= 128){
      let confirmNumber = window.confirm ("Will this contain numbers?");
      let confirmCharacter = window.confirm ("Will this contain special characters?");
      let confirmAlphaLower= window.confirm ("Will this contain lowercase letters?");
      let confirmAlphaUpper = window.confirm ("Will this contain uppercase letters");
    } else {
      window.alert("You need to provide a number between 8 and 128. Please try again.");
      return generatePassword();
    }
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
