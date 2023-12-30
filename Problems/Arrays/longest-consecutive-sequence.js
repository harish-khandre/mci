/* Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
 
Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. */

const longestConsecutive = (nums) => {
  const set = new Set(nums);
  let streak = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;
    let curr_streak = 1;

    while (set.has(num + 1)) {
      curr_streak++;
      num++;
    }
    streak = Math.max(streak, curr_streak);
  }
  return streak;
};

// better on

const longestConsecutive2 = (nums) => {
  // Step 1: Handle the base case when the array is empty.
  if (nums.length === 0) {
    return 0;
  }

  const numSet = new Set(nums);
  let longest = 1;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currNum = num;
      let counter = 1;

      while (numSet.has(currNum + 1)) {
        currNum++;
        counter++;
      }
      longest = Math.max(longest, counter);
    }
  }
  return longest;
};
