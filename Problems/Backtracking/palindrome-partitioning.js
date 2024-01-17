const partition = (s) => {
  /**
   * Helper function to check if a given string is a palindrome.
   *
   * @param {string} str - The input string
   * @return {boolean} - True if the string is a palindrome, false otherwise
   */
  const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  // Array to store the final result
  const result = [];
  // Temporary array to store the current palindrome partition
  const currentList = [];

  /**
   * Backtracking function to find all possible palindrome partitions starting from a given index.
   *
   * @param {number} startIdx - The starting index for partitioning
   */
  const backtrack = (startIdx) => {
    // If the starting index exceeds the length of the string, add the current partition to the result
    if (startIdx >= s.length) {
      result.push([...currentList]);
      return;
    }

    // Iterate over the string starting from the current index
    for (let i = startIdx; i < s.length; i++) {
      // Extract substring from the current index to the iterating index
      const substring = s.substring(startIdx, i + 1);

      // If the substring is a palindrome, add it to the current partition and continue with the next index
      if (isPalindrome(substring)) {
        currentList.push(substring);
        backtrack(i + 1);
        currentList.pop(); // Backtrack: remove the last added substring for the next iteration
      }
    }
  };

  // Start the backtracking from the beginning of the string
  backtrack(0);
  // Return the final result containing all possible palindrome partitions
  return result;
};
