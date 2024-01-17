/* const multiplyWithLoop = (arr) => {
  let product = 1;
  for (let index = 0; index < arr.length; index++) {
    product *= arr[index];
  }
  return product;
}; */

const recursiveMultiple = (nums) => {
  if (nums.length < 0) {
    return 1;
  }
  return (
    nums[nums.length - 1] * recursiveMultiple(nums.slice(0, nums.length - 1))
  );
};

console.log(multiplyWithLoop([1, 2, 3, 4]));
