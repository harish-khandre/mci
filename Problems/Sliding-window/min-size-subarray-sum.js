const minSubArrayLen = (target, nums) => {
  // Initialize left pointer, sum of current window, and the minimum length of the subarray
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  // Iterate through the array with the right pointer
  for (let right = 0; right < nums.length; right++) {
    // Add the current element to the sum
    sum += nums[right];

    // Try to minimize the window size while the current window satisfies the target sum
    while (sum >= target) {
      // Calculate the current window length and update the minimum length
      const currentLength = right - left + 1;
      minLength = Math.min(minLength, currentLength);

      // Remove the element at the left pointer from the sum
      sum -= nums[left];
      // Move the left pointer to the right to shrink the window
      left++;
    }
  }

  // If no valid subarray was found, minLength will remain Infinity
  // Return the minimum length found, or 0 if no valid subarray is found
  return minLength === Infinity ? 0 : minLength;
};
