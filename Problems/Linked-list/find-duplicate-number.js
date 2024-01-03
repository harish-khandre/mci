/* Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Example :
Input: nums = [1,3,4,2,2]
Output: 2 */

const findDuplicate = (nums) => {
  let slow = 0;
  let fast = 0;

  do {
    fast = nums[nums[fast]];
    slow = nums[slow];
  } while (slow !== fast);

  let slow2 = 0;
  do {
    slow = nums[slow];
    slow2 = nums[slow2];
  } while (slow !== slow2);

  return slow;
};
