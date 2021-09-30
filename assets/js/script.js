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

let passwordLength;
let uppercaseCheck;
let lowercaseCheck;
let numberCheck;
let specialCharacterCheck;

// function used to determine the length of the password
function determineLength() {
  const promptData = prompt(
    "Choose how many characters long you'd like your password to be between 8-128 characters"
  );
  if (promptData < 8) {
    alert("password length must be a number between 8 to 128");
  } else if (promptData > 128) {
    alert("Password length must be a number between 8-128 characters");
  } else if (isNaN(promptData)) {
    alert("Password length must be a number between 8-128 characters");
  } else {
    alert(
      "The next three screens will ask you what types of characters you would like to be included in your password.If you choose 'No' for all, your password will only contain lowercase letters."
    );
    passwordLength = promptData;
    console.log(passwordLength);
  }
}

// function used to determine whether the user wants to include uppercase characters in the password

function determineUppercase() {
  uppercaseCheck = prompt(
    "Do you want to include uppercase letters in your password? (Yes or No)"
  );
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please answer Yes or No");
    determineUppercase();
  } else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
    uppercaseCheck = false;
    return uppercaseCheck;
  } else {
    alert("Please answer Yes or No");
    determineUppercase();
  }
}

//function used to determine whether the user wants to include lowercase characters in the password

function determineLowercase() {
  lowercaseCheck = prompt(
    "Do you want to include lowercase letters in your password? (Yes or No)"
  );

  if (lowercaseCheck === null || lowercaseCheck === "") {
    alert("Please answer Yes or No");
    determineLowercase();
  } else if (lowercaseCheck === "yes" || lowercaseCheck === "y") {
    lowercaseCheck = true;
    return lowercaseCheck;
  } else if (lowercaseCheck === "no" || lowercaseCheck === "n") {
    lowercaseCheck = false;
    return lowercaseCheck;
  } else {
    alert("Please answer Yes or No");
    determineLowercase();
  }
}

//Function used to determine whether the user wants to include numbers in the password

function determineNumbers() {
  numberCheck = prompt(
    "Do you want to include numbers in your password? (Yes or No)"
  );
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "") {
    alert("Please answer Yes or No");
    determineNumbers();
  } else if (numberCheck === "yes" || numberCheck === "y") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "no" || numberCheck === "n") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Please answer Yes or No");
    determineNumbers();
  }
}

//Function used to determine whether the user wants to include special characters in the password

function determineSpecial() {
  specialCheck = prompt(
    "Do you want to include special characters in your password? (Yes or No)"
  );
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === "") {
    alert("Please answer Yes or No");
    determineSpecial();
  } else if (specialCheck === "yes" || specialCheck === "y") {
    specialCheck = true;
    return specialCheck;
  } else if (specialCheck === "no" || specialCheck === "n") {
    specialCheck = false;
    return specialCheck;
  } else {
    alert("Please answer Yes or No");
    determineSpecial();
  }
}

//Function used to take all the input from the previous functions and generate a password using a random number generator
// apply method (charAt)
function generatePassword() {
  determineLength();
  console.log(passwordLength);

  determineUppercase();
  console.log(uppercaseCheck);

  determineLowercase();
  console.log(lowercaseCheck);

  determineNumbers();
  console.log(numberCheck);

  determineSpecial();
  console.log(specialCheck);
}
//........................................

// if (uppercaseCheck && lowercaseCheck && numberCheck && specialCheck) {
//   characters += uppercaseChar + -lowercaseChar + numberChar + specialChar;
// } else if (uppercaseCheck && numberCheck) {
//   characters += uppercaseChar + numberChar;
// } else if (numberCheck && specialCheck) {
//   characters += numberChar + specialChar;
// } else if (uppercaseCheck && specialCheck) {
//   characters += uppercaseChar + specialChar;
// } else if (uppercaseCheck) {
//   characters += uppercaseChar;
// } else if (numberCheck) {
//   characters += numberChar;
// } else if (specialCheck) {
//   characters += specialChar;
// } else {
//   characters === lowercaseChar;
// }
// //....................

// // generate random password
// //for loop through array of func
// for (let i = 0, i < passwordLength; i++) {
//   password += characters.charAt(Math.floor(Math.random() * characters.length));

// }

// return password;
// }

// function generatePassword

// DONT MODIFY !!!!!!!!!!!!!!
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
