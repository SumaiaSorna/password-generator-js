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
  passwordLenth = prompt("Choose how many characters long you'd like your password to be between 8-128 characters")
}

// condition apply

if (passwordLength >=8 && passwordLength <= 128) {
alert("password length must be a number between 8 to 128");  


} else  {
  alert()

  return passwordLength;

}

// function used to determine whether the user wants to include uppercase characters in the password

function determineUpperCase(){
  uppercaseCheck = confirm("Do you want to include uppercase letters in your password?(Yes or No)")
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if () {

  } else {

  }


  //Function used to determine whether the user wants to include numbers in the password






//Function used to determine whether the user wants to include special characters in the password








// DONT MODIFY !!!!!!!!!!!!!!
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
