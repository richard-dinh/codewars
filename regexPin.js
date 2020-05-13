// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

const validatePIN = pin => {
  //return true or false
  //first checks for length of pin. anything that is not length 4 or 6 is return false
  if(pin.length !== 4 && pin.length!==6){
    return false
  }
  else{
    //next checks the characters. if the characters are not numbers (numbers fall within the unicode 49-56) then return false
    let check = true
    pin.split('').forEach(character => {
      if (character.charCodeAt() < 48 || character.charCodeAt() > 57)
        check = false
    })
    return check
  }
}

//online solution
function validatePIN2(pin) {
  //In this kata .test checks if pin is a string composed of 4 ({4}) or (|) 6 ({6}) digits (\d) with nothing else between start (^) & end ($)
//   ^ : a string that starts with...
//   ( : either
//  \d : a digit(0 - 9)...
//  {4}: that repeats four times...
//   | : or
//  \d : a digit(0 - 9)...
//  {6}: that repeats six times...
//  )
//   $ : and then ends
  return /^(\d{4}|\d{6})$/.test(pin)
}
console.log(validatePIN2('1000'))