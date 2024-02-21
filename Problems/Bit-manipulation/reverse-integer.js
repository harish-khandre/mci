const reverse = (x) => {
  // Define maximum and minimum boundaries for 32-bit signed integers
  const max = 2 ** 31 - 1;
  const min = -(2 ** 31);

  let result = 0; // Initialize result variable to store the reversed number
  while (x !== 0) {
    const digit = x % 10; // Extract the rightmost digit of the input number

    // Check if adding the next digit would exceed the maximum boundary
    if (result > max / 10 || (result === max / 10 && digit > max % 10))
      return 0;
    // Check if adding the next digit would exceed the minimum boundary
    if (result < min / 10 || (result === min / 10 && digit < min % 10))
      return 0;

    // Remove the rightmost digit from the input number
    x = Math.trunc(x / 10);
    // Append the extracted digit to the result
    result = result * 10 + digit;
  }

  // Return the reversed number
  return result;
};
