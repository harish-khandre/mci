const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = low + ((high - low) >> 1); // Use bitwise shift for faster division
    const midValue = nums[mid];

    if (midValue === target) {
      return mid;
    }
    if (midValue < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};
