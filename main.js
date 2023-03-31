const prompt = require('prompt-sync')();

const passwordGenerator =(minNum = 10, maxNum = 20)=> {

let passwordLength = prompt(`Choose your desired password length. Enter a number between ${minNum}-${maxNum}: `);
if (!isNaN(passwordLength)) passwordLength = Number(passwordLength);
if(typeof passwordLength !== 'number') throw new Error('Invalid input type. Please enter a number.');
if(passwordLength > maxNum || passwordLength < minNum) throw new Error(`Please enter a number between ${minNum}-${maxNum}.`)

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

const totalCharacterList = [...alphabetCharacters, ...uppercaseAlphabetCharacters, ...numbers, ...specialChars];
for (let i = totalCharacterList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [totalCharacterList[i], totalCharacterList[j]] = [totalCharacterList[j], totalCharacterList[i]];
  }
const variableNumber = totalCharacterList.length-(maxNum+minNum)
  if (passwordLength >= minNum && passwordLength <= maxNum) {
    const value = (maxNum - passwordLength) + minNum + variableNumber;
    passwordLength = value;
  } 
    
    return totalCharacterList.join('').slice(passwordLength);
    
}

console.log(passwordGenerator());
