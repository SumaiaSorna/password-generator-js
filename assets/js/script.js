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
    return promptData;
  }
}

// function used to determine whether the user wants to include uppercase characters in the password

function determineUppercase() {
  const uppercaseCheck = confirm(
    "Do you want to include uppercase letters in your password? (Yes or No)"
  );

  return uppercaseCheck;
}

//function used to determine whether the user wants to include lowercase characters in the password

function determineLowercase() {
  const lowercaseCheck = confirm(
    "Do you want to include lowercase letters in your password? (Yes or No)"
  );

  return lowercaseCheck;
}

//Function used to determine whether the user wants to include numbers in the password

function determineNumbers() {
  const numberCheck = confirm(
    "Do you want to include numbers in your password? (Yes or No)"
  );

  return numberCheck;
}

//Function used to determine whether the user wants to include special characters in the password

function determineSpecial() {
  const specialCheck = confirm(
    "Do you want to include special characters in your password? (Yes or No)"
  );

  return specialCheck;
}

//Function used to take all the input from the previous functions and generate a password using a random number generator
// apply method (charAt)
function generatePassword() {
  const passwordOptions = getPasswordOptionsPassword();
  console.log(passwordOptions);

  const passwordArray = [];

  // if passwordOptions.isUppercase then push to choices array

  if (passwordOptions.isUppercase) {
    passwordArray.push(uppercaseArray);
  }

  // if passwordOptions.isLowercase then push to choices array

  if (passwordOptions.isLowercase) {
    passwordArray.push();
  }
  // if passwordOptions.isNumbers then push to choices array
  if (passwordOptions.isNumber) {
  }
  // if passwordOptions.isSpecial then push to choices array

  if (passwordOptions.isSpecial) {
  }

  // for loop here based on password length
  // get random choice from choices array
  // get random character from the corresponding array
  // push random character to passwordArray

  // convert passwordArray to string
  // return password string
}

function getPasswordOptionsPassword() {
  const passwordOptions = {};

  const length = parseInt(determineLength());
  const isLowercase = determineLowercase();
  const isUppercase = determineUppercase();
  const isSpecialCharacter = determineSpecial();
  const isNumber = determineNumbers();

  // run validations
  if (!isNumber && !isLowercase && !isLowercase && !isSpecialCharacter) {
    alert("messgae");
    return;
  }

  passwordOptions.length = length;
  passwordOptions.isUppercase = isUppercase;
  passwordOptions.isLowercase = isLowercase;
  passwordOptions.isNumber = isNumber;
  passwordOptions.isSpecialCharacter = isSpecialCharacter;

  return passwordOptions;
}
//.......................................

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
