var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0; // If array is empty, return 0

  let k = 0; // Index for unique elements

  // Loop through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // If current element is different from the previous one
    if (nums[i] !== nums[k]) {
      k++; // Move to the next index for unique elements
      nums[k] = nums[i]; // Copy the current element to its appropriate position
    }
  }

  return k + 1; // k was the index, so add 1 to get the count of unique elements
};
