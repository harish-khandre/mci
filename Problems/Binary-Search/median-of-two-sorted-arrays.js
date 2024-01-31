/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2);
  arr = arr.sort((a, b) => a - b);
  let l = arr.length;

  let median = 0;
  if (l % 2 !== 0) {
    median = arr[(l - 1) / 2];
  } else {
    let medInd = arr[(l - 2) / 2] + arr[l / 2];
    median = medInd / 2;
  }
  return median;
};
