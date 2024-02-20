// Define a function called getSum which takes two parameters, a and b
const getSum = (a, b) => {
  // Execute a while loop until b is not equal to 0
  while (b !== 0) {
    // Calculate the bitwise XOR of a and b and store it in xor
    // Calculate the carry by performing a bitwise AND operation on a and b, then shifting the result one position to the left
    const [xor, carry] = [a ^ b, (a & b) << 1];

    // Update the value of a to be the calculated XOR value
    a = xor;

    // Update the value of b to be the calculated carry value
    b = carry;
  }
  // Return the final value of a
  return a;
};
