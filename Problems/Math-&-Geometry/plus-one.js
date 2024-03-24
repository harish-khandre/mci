const plusOne = (digits) => {
  const n = digits.length; // Get the length of the digits array

  // Check if the last digit is 9
  if (digits[n - 1] !== 9) {
    digits[n - 1]++; // Increment the last digit by 1
    return digits; // Return the modified array
  }

  // If the last digit is 9, find the first non-9 digit from right to left
  let nonNineIndex = n - 1;
  while (nonNineIndex >= 0 && digits[nonNineIndex] === 9) {
    digits[nonNineIndex] = 0; // Set current digit to 0
    nonNineIndex--; // Move to the next digit towards left
  }

  // If all digits are 9, add one more digit at the beginning
  if (nonNineIndex === -1) {
    digits.unshift(1); // Add 1 at the beginning of the array
  } else {
    digits[nonNineIndex]++; // Increment the non-9 digit
  }

  return digits; // Return the modified array
};
