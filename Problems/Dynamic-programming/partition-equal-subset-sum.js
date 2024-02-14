const canPartition = (nums) => {
  const isEmpty = nums.length === 0;
  if (isEmpty) return false;

  const sum = getSum(nums); /* Time O(N) */

  const isEven = sum % 2 === 0;
  if (!isEven) return false;

  const subSetSum = sum >> 1;
  const memo = initMemo(nums, subSetSum); /*               | Space O(N * M) */
  const index = nums.length - 1;

  return dfs(nums, index, subSetSum, memo); /* Time O(N * M) | Space O(N * M) */
};

var getSum = (nums, sum = 0) => {
  for (const num of nums) {
    sum += num;
  } /* Time O(N) */

  return sum;
};

var initMemo = (nums, subSetSum) =>
  new Array(nums.length + 1)
    .fill() /* Space O(N) */
    .map(() => new Array(subSetSum + 1).fill(null)); /* Space O(M) */

var dfs = (nums, index, subSetSum, memo) => {
  const isBaseCase1 = subSetSum === 0;
  if (isBaseCase1) return true;

  const isBaseCase2 = index === 0 || subSetSum < 0;
  if (isBaseCase2) return false;

  const hasSeen = memo[index][subSetSum] !== null;
  if (hasSeen) return memo[index][subSetSum];

  const difference = subSetSum - nums[index - 1];

  const left = dfs(nums, index - 1, difference, memo);
  const right = dfs(nums, index - 1, subSetSum, memo);

  memo[index][subSetSum] = left || right;
  return memo[index][subSetSum];
};

// Another approach

var _canPartition = function (A) {
  // Calculate the sum of all elements in array A
  var sumA = A.reduce((acc, curr) => acc + curr);

  // Check if the sum is odd, if so, return false as it's impossible to partition equally
  if (sumA % 2) return false;

  // Initialize a variable 'row' with a bit pattern representing target sum divided by 2
  let row = 1n << BigInt(sumA / 2);

  // Iterate over each element in array A
  for (const weight of A) {
    // Update 'row' by shifting right by 'weight' bits and performing bitwise OR operation
    row = row | (row >> BigInt(weight));
  }

  // Check if the first bit of 'row' is set to 1 using bitwise AND operation, and return the result
  return row & 1n;
};
