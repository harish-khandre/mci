// Function to calculate the Hamming weight (number of set bits) of a given number
const hammingWeight = (n) => {
  let count = 0; // Initialize count to 0, which will store the number of set bits
  while (n !== 0) {
    // Continue looping until n becomes 0 (no more set bits)
    count += n & 1; // Increment count if the least significant bit of n is set (using bitwise AND operation)
    n >>>= 1; // Right shift n by 1 bit to check the next least significant bit
  }
  return count; // Return the total count of set bits
};
