const removeDuplicates = (nums) => {
  // Initialize a variable j to keep track of the position where the next unique element will be placed
  let j = 2;

  // Iterate through the array starting from the third element (index 2)
  for (let i = 2; i < nums.length; i++) {
    // Check if the current element is different from the element two positions behind it
    if (nums[i] !== nums[j - 2]) {
      // If it is different, update the element at position j to the current element
      // and increment j to prepare for the next unique element
      nums[j++] = nums[i];
    }
  }

  // Return the length of the resulting array, which represents the number of unique elements
  return j;
};
