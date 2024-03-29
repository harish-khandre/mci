const removeElement = (nums, val) => {
  let k = 0; // Initialize k to track the number of elements not equal to val

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Move non-val elements to the front of the array
      k++; // Increment k for each non-val element found
    }
  }

  return k; // Return the number of elements not equal to val
};
