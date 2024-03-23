/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true; // Base case: 1 is a happy number

  let slow = n; // Initialize slow pointer with n
  let fast = n; // Initialize fast pointer with n

  // Move slow pointer by one step and fast pointer by two steps
  do {
    slow = sumOfSquares(slow); // Move slow by one step
    fast = sumOfSquares(sumOfSquares(fast)); // Move fast by two steps
  } while (slow !== fast);

  // If the pointers meet, a cycle is detected
  return slow === 1; // If the cycle reaches 1, then n is a happy number
};

function sumOfSquares(num) {
  let sum = 0;
  while (num > 0) {
    let last_digit = num % 10; // Extract the last digit
    sum += last_digit ** 2; // Add the square of the digit to the sum
    num = Math.floor(num / 10); // Remove the last digit
  }
  return sum;
}
