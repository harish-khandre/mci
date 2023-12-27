// Set doesnt save duplicate values

const containsDuplicate = (nums) => {
  const set = new Set(nums);
  return set.size !== nums.length;
};
