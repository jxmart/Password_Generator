// Assignment code here



// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

const numbers = [1,2,3,4,5,6,7,8,9];
const symbols = ['@','#','$','%','^','&','*','_','+','?','{','}'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const UpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];



function generatePassword (){
  let passwordArray =[]
  let outputPassword = ''
  let finalPassword = ''
  let passwordlength = prompt('how many characters would you like?');
console.log( +passwordlength);
if (passwordlength < 8 || passwordlength > 129){
  alert('this information is incorrect');
  return
}
let passwordNum = confirm('would you like numbers?');
if (passwordNum = true ){
  passwordArray = passwordArray.concat(numbers)
  console.log(passwordArray)
}
let passwordSymbols = confirm('would you like symbols?');
if (passwordSymbols = true){
passwordArray = passwordArray.concat(symbols);
console.log(passwordArray)
}
let passwordlowerCase = confirm('would you like lowercase?');
if (passwordlowerCase = true){
  passwordArray = passwordArray.concat(lowerCase);
}
let passwordUpperCase = confirm('would you like uppercase?');
if (passwordUpperCase = true){
  passwordArray = passwordArray.concat(UpperCase);
}
console.log(passwordArray)

for (i = 0; i < passwordlength; i++){
  let randomIndex = Math.floor(Math.random() * passwordArray.length)
  
  outputPassword += passwordArray[randomIndex]
  
}
console.log(outputPassword)

  
// prompt the user for password criteria 
// password length - 8-128
// imput validation
// Display password to the page



  

  
return outputPassword
}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}




 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

