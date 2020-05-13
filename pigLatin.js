// Move the first letter of each word to the end of it, then add "ay" to the end of the word.Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = str => {
  //Code here
  return str.split(' ').map(word => {
    //if the workd is between A-Z or a-z, then take the first character + ay and add it to the end. substring(1) removes the first character
    if (word.match(/^[A-Za-z]+$/)){
      return word = (word + word[0] +'ay').substring(1)
    }
    else return word
  }).join(' ')
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))