// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it.If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

const sortArray = arr => {
  if(arr.length < 1) return []
  let oddNumbers = []
  arr = arr.map(number => {
    if(number%2 === 1) {
      oddNumbers.push(number)
      return 'odd'
    }
    else return number
  })
  //sort ascending
  oddNumbers.sort( (a,b) => a-b)
  console.log(oddNumbers)
  let index = 0
  arr = arr.map(element => {
    if(element ==='odd'){
      index += 1
      return oddNumbers[index-1]
    }
    else{
      return element
    }
  })
  return arr
}


//best solution:
function sortArray2(array) {
  //filter array for only odd numbers, sort it by ascending, and put into odd
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  //.shift removes the first item in the array and returns that value
  return array.map((x) => x % 2 ? odd.shift() : x);
}
console.log(sortArray2([5, 3, 2, 8, 1, 4, 11]))