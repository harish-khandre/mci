const romanToInt = (s) => {
  // Define a mapping of Roman numerals to their integer values
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Convert the input string into an array of integers
  const integers = s.split("").map((char) => roman[char]);

  // Initialize total sum
  let total = 0;

  // Iterate through the array of integers
  for (let i = 0; i < integers.length; i++) {
    // If the current integer is less than the next one, subtract it
    if (i < integers.length - 1 && integers[i] < integers[i + 1]) {
      total -= integers[i];
    } else {
      // Otherwise, add it to the total
      total += integers[i];
    }
  }
  // Return the total sum
  return total;
};
