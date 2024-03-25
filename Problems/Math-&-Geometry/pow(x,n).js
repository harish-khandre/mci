var myPow = function (x, n) {
  // Base case: if n is 0, return 1
  if (n === 0) return 1;

  // If n is negative, convert x to its reciprocal and make n positive
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1; // Initialize result variable

  // Iteratively calculate result using binary exponentiation
  while (n > 0) {
    // If n is odd, multiply result by x
    if (n % 2 === 1) {
      result *= x;
    }
    x *= x; // Square x for the next iteration
    n = Math.floor(n / 2); // Halve n
  }

  return result; // Return the final result
};
