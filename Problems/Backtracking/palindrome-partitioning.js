const partition = (s) => {
  // Helper function to check if a string is a palindrome
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

  // Result array to store the partitioned palindromic substrings
  const result = [];
  // Current list to keep track of the current partition
  const currentList = [];

  // Backtracking function to generate all possible partitions
  const backtrack = (startIdx) => {
    // If we have reached the end of the string, add the current partition to the result
    if (startIdx >= s.length) {
      result.push([...currentList]);
      return;
    }

    // Iterate over the string, starting from the current index
    for (let i = startIdx; i < s.length; i++) {
      // Extract substring from the current index to i
      const substring = s.substring(startIdx, i + 1);

      // If the substring is a palindrome, add it to the current partition and continue with the next index
      if (isPalindrome(substring)) {
        currentList.push(substring);
        backtrack(i + 1);
        // Backtrack by removing the last added substring to explore other possibilities
        currentList.pop();
      }
    }
  };

  // Start the backtracking process from the beginning of the string
  backtrack(0);
  // Return the final result containing all palindromic partitions
  return result;
};
