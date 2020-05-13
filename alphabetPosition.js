const alphabetPosition = text => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  //make all text to lower case and split into array
  text = text.toLowerCase().split('')
  //loop through the text array
  for(let i=0; i< text.length; i++){
    //check if the character is is found in alphabet
    if(alphabet.indexOf(text[i]) !==-1){
      //if so convert that letter to its number within the alphabet. Have to + 1 because of array indexes starting at 0
      text[i] = alphabet.indexOf(text[i]) + 1
    }
    else{
      //if not found in alphabet, remove from array. Have to subtract i by 1 to prevent it from skipping over the next value in the array
      text.splice(i,1)
      i = i-1
    }
  }
  return text.join(' ');
}


//possible solutions:
// function alphabetPosition(text) {
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   return text.toLowerCase().split('')
//     .filter(letter => {
//       let index = alphabet.indexOf(letter);
//       return index > -1;
//     })
//     .map(letter => alphabet.indexOf(letter) + 1)
//     .join(' ')
// }

//best solution
function alphabetPosition2(text) {
  return text
    .toLowerCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 96 )
    .join(' ');

    //converts all to lower case
    //then matches for only characters in the alphabet. match converts a string to an array and only add the character to the array based on what fits in the match criteria, in this case if the character is is in the alphabet
    //then map each number changing it to unicode. the unicode for a = 97. since a = 1, you have to minus 96
    //finally join all numbers but seperated by a space (' ')
}
// console.log(alphabetPosition("The sunset sets at twelve o' clock."))
console.log(alphabetPosition2("The sunset sets at twelve o' clock."))