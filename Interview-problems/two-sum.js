// Naive, the numbers are checkin in the \ pattern \ top is checking i and j is at bottom so \ pattern of checking
function hasPairWithSum(arr, sum) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));

// if you want to show the numbers then although this produces O(n^2)
function twoSum(nums, target) {
  for (let index = 0; index < array.length; index++) {
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[index] + nums[i] === target) {
        return [index, i];
      }
    }
  }
}

// here is better version

const twoSumAdvanceV = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
  return [-1, -1];
};
