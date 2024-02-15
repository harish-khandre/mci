const singleNumber = (nums, xor = 0) => {
  // Iterate through each number (num) in the nums array
  for (num of nums) {
    // Perform bitwise XOR operation between the current value of xor and the current number (num), and update xor with the result
    xor ^= num;
  }
  // Return the final result of the XOR operation
  return xor;
};
