// Define a function maxProduct that takes an array of numbers (nums) as input
const maxProduct = (nums) => {
  // Initialize variables to store maximum, minimum, and result
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Save the current value of max in a temporary variable
    let temp = max;
    // Update max by finding the maximum value among three possibilities:
    // current element, current element multiplied by max, and current element multiplied by min
    max = Math.max(nums[i], max * nums[i], min * nums[i]);
    // Update min by finding the minimum value among three possibilities:
    // current element, previous max multiplied by current element, and current element multiplied by min
    min = Math.min(nums[i], temp * nums[i], min * nums[i]);
    // Update result with the maximum of result and max
    result = Math.max(result, max);
  }
  // Return the maximum product found
  return result;
};
