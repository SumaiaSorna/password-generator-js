// Assignment Code
var generateBtn = document.querySelector("#generate");

// store arrays of characters

const uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacterArray = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "  ",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// check

const passwordLength;
const uppercaseCheck;
const numberCheck;
const specialCharacterCheck;

// function used to determine the length of the password
function determineLength() {
  passwordLength = prompt("Choose how many characters long you'd like your password to be between 8-128 characters")
}

// condition apply

if (passwordLength <8) {
alert("password length must be a number between 8 to 128"); 
determineLength();

} else if (passwordLength>128) {
  alert("Password length must be a number between 8-128 characters");
  determineLength(); 

}else if (isNaN(passwordLength)){
  alert("Password length must be a number between 8-128 characters");
  determineLength();

}else {
  alert("The next three screens will ask you what types of characters you would like to be included in your password.If you choose 'No' for all, your password will only contain lowercase letters.")
}

  return passwordLength;

} 



// function used to determine whether the user wants to include uppercase characters in the password

  function determineUpperCase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password?(Yes or No)")
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please answer Yes or No");
    determineUpperCase();

  }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
    uppercaseCheck = true;
    return uppercaseCheck;

  }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
    uppercaseCheck = false;
    return uppercaseCheck;
  
  }else {
    alert("Please answer Yes or No");
    determineUppercase();
  }
  return uppercaseCheck;
}

  //Function used to determine whether the user wants to include numbers in the password






//Function used to determine whether the user wants to include special characters in the password



 //Function used to take all the input from the previous functions and generate a password using a random number generator
 // apply method



// DONT MODIFY !!!!!!!!!!!!!!
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
