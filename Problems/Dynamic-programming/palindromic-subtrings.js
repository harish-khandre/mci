// Function to count the number of palindromic substrings in a given string
const countSubstrings = (s) => {
  let count = 0; // Initialize a counter to keep track of the number of palindromic substrings

  // Iterate through each character of the string
  for (let i = 0; i < s.length; i++) {
    let left = i; // Initialize a left pointer for the substring
    let right = i; // Initialize a right pointer for the substring

    // Call the helper function to find palindromic substrings with odd length
    helper(left, right);
    // Call the helper function to find palindromic substrings with even length
    helper(left, right + 1);
  }

  // Helper function to find palindromic substrings
  function helper(left, right) {
    // Keep expanding the substring boundaries as long as it forms a palindrome
    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      count++; // Increment the count when a palindrome is found
      left--; // Move the left pointer towards the start of the string
      right++; // Move the right pointer towards the end of the string
    }
  }

  return count; // Return the total count of palindromic substrings
};
