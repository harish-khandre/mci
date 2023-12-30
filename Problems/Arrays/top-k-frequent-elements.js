/* 347. Top K Frequent Elements
Medium
Topics
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2] */

const topKFrequent = (nums, k) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else {
      map.set(nums[i], map.get(nums[i] + 1));
    }
  }
  const mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  const result = [];
  let count = 0;
  for (let [key, val] of mapSort1.entries()) {
    if (count < k) {
      result.push(key);
      count++;
    }
  }
  return result;
};

// Or

const topKFrequent2 = (nums, k) => {
  const map = new Map();
  const res = [];
  // if the number repeats then then the {ex. e = 10 } (10, map.get(1) + 1) if not then 0 if 10 repeats then mep.get(1) so + 1 that will become 2. get gives value
  // in short map.get add the value of +1 if there is existing value of 1 then it will give +2
  // biome-ignore lint/complexity/noForEach: <explanation>
  nums.forEach((e) => map.set(e, (map.get(e) || 0) + 1));
  const store = [...map.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k && i < store.length; i++) res.push(store[i][0]);

  return res;
};
