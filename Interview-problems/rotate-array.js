const revN = (nums, from, to) => {
  while (from < to) {
    [nums[from], nums[to]] = [nums[to], nums[from]];
    from++;
    to--;
  }
};

const rotate = (nums, k) => {
  k = k % nums.length;
  nums.reverse();
  revN(nums, 0, k - 1);
  revN(nums, k, nums.length - 1);
};
