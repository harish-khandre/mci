const majorityElement = (nums) => {
  let count = 0,
    leader;
  for (let i = 0; i < nums.length; i++) {
    if (count < 1) leader = nums[i];
    if (nums[i] == leader) count++;
    else count--;
  }
  return leader;
};

// other solution

const _majorityElement = (nums) => {
  const map = {};
  for (const n of nums) {
    map[n] = map[n] + 1 || 1;
  }
  for (const key in map) {
    if (map[key] > nums.length / 2) {
      return key;
    }
  }
};

// boyer-moore-algo

const majorityElement_ = (nums) => {
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
