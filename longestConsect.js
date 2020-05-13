// You are given an array strarr of strings and an integer k.Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//   Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)-- > "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

//   Note
// consecutive strings: follow one after another without an interruption

const longestConsec = (strarr, k) => {
  // your code
  if(k<=0 || strarr.length ===0 || k > strarr.length) return ''
  let longestWord = ''
  //loop through end of arr
  for(let i =0; i<=strarr.length-k; i++){
    let currentWord = ''
    //loop to get size of combined word based on size of k. Start at i and go until k+i. Also need to stop if reached the end of array. Have to do <= strarr.length - k so that we include the last element in the array
    for(let j = i; j<k+i; j++){
      // console.log('i: ', i)
      // console.log('j: ', j)
      // console.log('k+i: ', k+i)
      // console.log('strarr[j]: ', strarr[j])
      currentWord += strarr[j]
    }
    if(currentWord.length > longestWord.length) longestWord = currentWord
  }
  return longestWord
}


//best solution:

function longestConsec2(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))
