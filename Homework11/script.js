// Assignment Code
var generateBtn = document.querySelector("#generate");
var charsLower = "abcdefghijklmnopqrstuvwxyz"
var charsLowerArray=charsLower.split("")
var charsUpper = charsLower.toUpperCase()
var charsUpperArray= charsUpper.split("")
var charsNumbers = "012345679"
var charsNumberArray= charsNumbers.split("")
var charsSpecial = "!@#$%^&*()_+"
var charsSpecialArray= charsSpecial.split("")
var passwordContent=[]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.querySelector(".answer").value = passwordContent

function generatePassword(){
  var passcode= parseInt(prompt("password length"))
  if(passcode < 8){
    alert("password should be more than 8 letters")
    generatePassword()
    
  }
  else if(passcode > 128){
  alert("password is greater than 128 letters")
  generatePassword()
  }
  else {
    console.log("valid password")

  }
  var specialCharacter= confirm("do you want special characters in your password")
  var upperCase= confirm("do you want uppercase characters in your password")
  var Numbers= confirm("do you want numbers in your password")
  var lowerCase=confirm("do you want lower case characters in your password")
  if (specialCharacter=== true){

    for (var i=0; i<passcode;i++){
      passwordContent.push(charsSpecialArray[Math.floor(Math.random()*12) +1])
    }
  }
  if (upperCase===true){
    console.log("hello")
    for (var i=0; i<passcode;i++){
      passwordContent.push(charsUpperArray[Math.floor(Math.random()*25) +1])
    }
    
  }
  if (Numbers=== true){
    for (var i=0; i<passcode;i++){
      passwordContent.push(charsNumberArray[Math.floor(Math.random()*10) +1])
    }
  }
  if (lowerCase=== true){
    for (var i=0; i<passcode;i++){
      passwordContent.push(charsLowerArray[Math.floor(Math.random()*25) +1])
    }
  }
return passwordContent.join("")
  
  
  console.log(passcode)
  console.log(passwordContent)

}




