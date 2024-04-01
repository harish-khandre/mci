const majorityElement = (nums) => {
  let count = 0;
  let candidate = null;

  // Finding the majority element candidate
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  // Verifying if the candidate is indeed the majority element
  count = 0;
  for (const num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > nums.length / 2) {
    return candidate;
  }

  return null; // No majority element found
};

// Example usage
const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log("Majority Element:", majorityElement(nums)); // Output: 4
