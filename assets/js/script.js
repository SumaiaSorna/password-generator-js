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

  return promptData;
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

// declare a function randomIndex

function randomIndex(arr) {
  const index = Math.floor(Math.random() * arr.length);
  const indexValue = arr[index];

  return indexValue;
}

//Function used to take all the input from the previous functions and generate a password using a random number generator
// apply method (charAt)
function generatePassword() {
  const passwordOptions = getPasswordOptionsPassword();
  console.log(passwordOptions);

  // declare password array to store the random characters
  const passwordArray = [];

  const randomArray = [];

  const finalPassword = [];

  // if passwordOptions.isUppercase then push to choices array

  if (passwordOptions.isUppercase) {
    passwordArray.push(...uppercaseArray);
    randomArray.push(randomIndex(uppercaseArray));
  }

  // if passwordOptions.isLowercase then push to choices array

  if (passwordOptions.isLowercase) {
    passwordArray.push(...lowercaseArray);
    randomArray.push(randomIndex(lowercaseArray));
  }
  // if passwordOptions.isNumbers then push to choices array
  if (passwordOptions.isNumber) {
    passwordArray.push(...numArray);
    randomArray.push(randomIndex(numArray));
  }
  // if passwordOptions.isSpecial then push to choices array

  if (passwordOptions.isSpecialCharacter) {
    passwordArray.push(...specialCharacterArray);
    randomArray.push(randomIndex(specialCharacterArray));
  }
  console.log(passwordArray);
  console.log(randomArray);

  // for loop here based on password length

  for (let i = 0; i < passwordOptions.length; i++) {
    const passwordChar = randomIndex(passwordArray);
    finalPassword.push(passwordChar);
  }
  console.log(finalPassword);
  for (let i = 0; i < randomArray.length; i++) {
    finalPassword[i] = randomArray[i];
  }
  return finalPassword.join("");
}

function getPasswordOptionsPassword() {
  const passwordOptions = {};

  const length = parseInt(determineLength());
  if (length >= 8 && length <= 128) {
    const isLowercase = determineLowercase();
    const isUppercase = determineUppercase();
    const isSpecialCharacter = determineSpecial();
    const isNumber = determineNumbers();
    if (!isNumber && !isLowercase && !isLowercase && !isSpecialCharacter) {
      alert("You have not selected a valid password");
      return;
    } else {
      passwordOptions.length = length;
      passwordOptions.isUppercase = isUppercase;
      passwordOptions.isLowercase = isLowercase;
      passwordOptions.isNumber = isNumber;
      passwordOptions.isSpecialCharacter = isSpecialCharacter;

      return passwordOptions;
    }
  } else {
    alert("password length must be a number between 8 to 128");
    console.log("length", length);
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
