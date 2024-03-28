// Define a function named merge that takes in four parameters: nums1, m, nums2, n
var merge = function (nums1, m, nums2, n) {
  // Initialize variables first, second, and i with appropriate values
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  // Iterate over nums2 and nums1 in reverse order
  while (second >= 0) {
    // Retrieve the current elements from nums1 and nums2
    let firstItem = nums1[first];
    let secondItem = nums2[second];

    // Compare the current elements from nums1 and nums2
    if (firstItem >= secondItem) {
      // If the element from nums1 is greater or equal, assign it to the end of nums1
      nums1[i] = firstItem;
      // Decrement i and first
      i--;
      first--;
    } else {
      // If the element from nums2 is greater, assign it to the end of nums1
      nums1[i] = secondItem;
      // Decrement i and second
      i--;
      second--;
    }
  }
};
