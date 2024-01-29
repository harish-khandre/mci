// Check if the array is not rotated (sorted in ascending order)
// If so, the minimum element is at the first index.
// Example: [1, 2, 3, 4, 5]
const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  // If the array is not rotated, return the first element
  if (nums[left] < nums[right]) {
    return nums[left];
  }

  // Binary search to find the minimum element in the rotated array
  while (left < right) {
    const center = Math.floor((left + right) / 2);

    // If the center element is greater than the rightmost element,
    // the minimum element must be in the right half.
    if (nums[center] > nums[right]) {
      left = center + 1;
    } else {
      // If the center element is less than or equal to the rightmost element,
      // the minimum element must be in the left half (including the center).
      right = center;
    }
  }

  // When the loop exits, 'left' will be pointing to the minimum element.
  return nums[left];
};
