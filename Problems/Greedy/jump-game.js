// Define a function 'canJump' which takes an array of numbers 'nums' as input
// and two optional parameters 'max' and 'index' initialized to 0.
const canJump = (nums, max = 0, index = 0) => {
  // Iterate through the array while 'index' is less than the length of 'nums'.
  while (index < nums.length) {
    // Retrieve the value at the current index in 'nums'.
    const num = nums[index];
    // Calculate the maximum reachable index with the current jump ('num').
    const jumps = num + index;
    // Determine if the maximum reachable index ('max') is less than the current index.
    const canNotReachEnd = max < index;
    // If it's not possible to reach the end from the current position, return false.
    if (canNotReachEnd) return false;
    // Update 'max' to the maximum of the current 'max' and the new reachable index ('jumps').
    max = Math.max(max, jumps);
    // Move to the next index in the array.
    index++;
  }
  // If the loop completes successfully, it means the end of the array is reachable, so return true.
  return true;
};
