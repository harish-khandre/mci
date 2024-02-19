// Function to find the missing number in an array of numbers
const missingNumber = (nums, missingNumber = nums.length) => {
  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate XOR of current index and corresponding number in the array
    const xor = i ^ nums[i];
    // XOR the result with the current missingNumber
    missingNumber ^= xor;
  }
  // Return the final missing number
  return missingNumber;
};
