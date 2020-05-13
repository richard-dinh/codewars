// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.You can guarantee that input is non - negative.

//   Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
  // Program Me
  //toString(2) converts a number to binary
  n = n.toString(2)
  //converts a string to an arr
  let arr = n.split('')
  //filters the array for values that are 1 and only returns those values
  let onesInArr = arr.filter( value => value ==='1')
  //returns the length of onesInArr
  return onesInArr.length
};

//best solution:
// countBits = n => n.toString(2).split('0').join('').length;
const countBits2 = n => {
  //toString converts it to binary, split takes out all the 0, have to join the array in the event 0 is at the end of the string. Example: if you split 1010, then it returns ['1','1','']. Thats why you need to join then get the length. if you join, the string becomes 11 and the length gives you 2 instead of 3
  return n.toString(2).split('0').join('').length;
}

// console.log(countBits(10))
console.log(countBits2(10))

let s = '1010'
s = s.split('0')
console.log(s)