function lengthOfLIS(nums) {
  // Handle empty array case
  if (nums.length === 0) {
    return 0;
  }
  // Initialize `dp` array to store LIS elements and `length` variable
  const dp = new Array(nums.length).fill(0);
  let length = 0;

  // Iterate through each number in the input array
  for (let num of nums) {
    // Use binary search to find the correct position for `num` in `dp`
    const i = binarySearch(dp, 0, length, num);

    // Place `num` at the found position in `dp`
    dp[i] = num;

    // Update `length` if the inserted position extends the LIS
    length = Math.max(length, i + 1);
  }

  // Return the final length of the LIS
  return length;
}

// Binary search function to find the insertion position for a number in a sorted array
function binarySearch(arr, low, high, num) {
  // Iterate until the search space collapses
  while (low < high) {
    // Calculate the middle index
    const mid = Math.floor((low + high) / 2);

    // Check if the element is at the middle index
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      // Search in the right half if `num` is greater than the element at `mid`
      low = mid + 1;
    } else {
      // Search in the left half if `num` is smaller than the element at `mid`
      high = mid;
    }
  }

  // Return the low index as the insertion position
  return low;
}

// Example usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const length = lengthOfLIS(nums);
console.log("Length of LIS:", length);
