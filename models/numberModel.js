/*
* Accept integer number (n), return JSON Objects (
  data = array of string from 1 up to n)
* Integer divisible by 3, return Foo
* Integer divisible by 5, return Bar
* Integer divisible by 3 and 5, return FooBar
* Otherwise, return integer
*/
exports.FooBar = (n) => {
  let data = [];
  //check n if not or negative integer, return value
  const maxCounter = (!Number.isInteger(n)) ? 0 : (n < 0) ? Math.abs(n) : n;

  for (let counter = 1; counter <= maxCounter; counter++) {
    if(checkIfRemainderIsEqualToZero(counter, 3) && checkIfRemainderIsEqualToZero(counter, 5) ) {
      data.push("FooBar");
      continue;
    } else if (checkIfRemainderIsEqualToZero(counter, 3)) {
      data.push("Foo");
      continue;
    } else if (checkIfRemainderIsEqualToZero(counter, 5)) {
      data.push("Bar");
      continue;
    } else {
      data.push((n < 0) ? -Math.abs(counter.toString())  : counter.toString());
    }
  }
  
  return { 
    data, 
    message: checkReqInputNumber(n)
  };
}

//Check input integer, return a message
checkReqInputNumber = (n) => {
  if(n == 0) {
    return "I can only print an integer greater than or less than 0.";
  } else if (isNaN(n) || !Number.isInteger(n)) {
    return "Input number must be a valid integer.";
  } else {
    return "Success!"
  }
}

//Check if the remainder is 0, return boolean
function checkIfRemainderIsEqualToZero(dividend, divisor){
	return dividend % divisor === 0;
}