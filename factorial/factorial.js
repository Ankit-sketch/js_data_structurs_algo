//Factorial of a Number
// Input: n = 5
// Output: 120
// Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120

// Input: n = 4
// Output: 24
// Explanation: 4! = 4 * 3 * 2 * 1 = 24

let input = 9;
function getFactorial(input) {
  let answer = [1];
  for (let i = 2; i <= input; i++) {
    let currentLength = answer.length - 1;
    let carry = 0;
    for (let j = 0; j <= currentLength; j++) {
      let newMultipliedValue = i * answer[j];
      let multipliedValue = newMultipliedValue + carry;
      let remainder = multipliedValue % 10;
      answer[j] = remainder;
      let newCarry = Math.floor(multipliedValue / 10);
      carry = newCarry;
    }
    getNumber(carry, answer);
  }
  function getNumber(incomingNumber, answer) {
    if (incomingNumber <= 0) return;
    let remainder = incomingNumber % 10;
    answer.push(remainder);
    let newNumber = Math.floor(incomingNumber / 10);
    getNumber(newNumber, answer);
  }
  return answer;
}
console.log(getFactorial(input));
