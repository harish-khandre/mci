const maxSubArray = (nums) => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    max = Math.max(nums[i], max);
  }
  return max;
};

// another one which is more declarative

const maxSubArrayDP = (nums) => {
  let currMax = nums[0];
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    max = Math.max(currMax, max);
  }
  return max;
};
