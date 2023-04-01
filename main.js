const prompt = require('prompt-sync')();

const passwordGenerator =(minNum = 12, maxNum = 20)=> {
let totalCharacterList;
let passwordLength;

const randomLength =()=>{
   return Math.floor(Math.random() * (maxNum - minNum + 1)+ minNum) 
}
const numbers = [];
    for(let i = 0; i < 10; i++){
        numbers.push(i)
    }
const specialChars = [];
    for (let i = 33; i <= 47; i++) {
        specialChars.push(String.fromCharCode(i));
      }
const alphabetCharacters = [];
    for (let i = 97; i <= 122; i++) {
        alphabetCharacters.push(String.fromCharCode(i));
      }
const uppercaseAlphabetCharacters = [];    
      alphabetCharacters.forEach(e =>{
        uppercaseAlphabetCharacters.push(e.toUpperCase())
    })
let passwordChoice = prompt(`Would you like us to generate a password of random length? Enter Yes or No: `);
if (passwordChoice === 'Yes' || passwordChoice === 'yes' || passwordChoice === 'Y' || passwordChoice === 'y'){
    passwordLength = randomLength();
} else if (passwordChoice === 'No' || passwordChoice === 'no' || passwordChoice === 'N' || passwordChoice === 'n'){
    passwordLength = prompt(`Choose your desired password length. Enter a number between ${minNum}-${maxNum}: `);
} else {
    throw new Error('Please select Yes or No for random password length')
}
if (!isNaN(passwordLength)) passwordLength = Number(passwordLength);
if(typeof passwordLength !== 'number') throw new Error('Invalid input type. Please enter a number.');
if(passwordLength > maxNum || passwordLength < minNum) throw new Error(`Please enter a number between ${minNum}-${maxNum}.`)
let specialCharsChoice = prompt(`Would you like your password to include special characters?: `);
if(specialCharsChoice == 'Yes' || specialCharsChoice == 'yes' || specialCharsChoice == 'Y' || specialCharsChoice == 'y') {
    totalCharacterList = [...alphabetCharacters, ...uppercaseAlphabetCharacters, ...numbers, ...specialChars];
} else if(specialCharsChoice === 'No' || specialCharsChoice === 'N' || specialCharsChoice === 'n') {
    totalCharacterList = [...alphabetCharacters, ...uppercaseAlphabetCharacters, ...numbers];
} else {
    throw new Error('Please enter Yes or No for Special Characters!')
}

    
for (let i = totalCharacterList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [totalCharacterList[i], totalCharacterList[j]] = [totalCharacterList[j], totalCharacterList[i]];
  }
   
    return totalCharacterList.join('').slice(0, passwordLength)
}

console.log(passwordGenerator());

