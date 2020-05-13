// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1, 2], [1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3]

function array_diff(a, b) {
  //filter takes in an array and returns values based on a check. if true, returns that value. if false, does not return that value
  return a.filter( value => {
    console.log(b.indexOf(value) ===-1)
    return b.indexOf(value) === -1
  }
  )
}

console.log(array_diff([1,2,2], [2]))