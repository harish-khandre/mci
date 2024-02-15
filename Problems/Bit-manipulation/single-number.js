const singleNumber = (nums) => {
  // Initialize a variable `xor` with the first element of the input array
  let xor = nums[0];

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Perform bitwise XOR operation between `xor` and the current element of the array
    xor ^= nums[i];
  }

  // Return the final result after XORing all elements of the array
  return xor;
};
