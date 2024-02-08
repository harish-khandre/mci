// Function to find the longest palindrome substring in a given string
const longestPalindrome = (s) => {
  // Initialize variable to store the longest palindrome found
  let longest = "";

  // Function to check if a substring is a palindrome
  const isPal = (s, left, right) => {
    // While characters at left and right pointers match and are within bounds
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--; // Move left pointer towards start of string
      right++; // Move right pointer towards end of string
    }
    // Return the palindrome substring found
    return s.slice(left + 1, right);
  };

  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    // Check for palindromes with odd length, centered at character i
    let OddPal = isPal(s, i, i);
    // Check for palindromes with even length, centered at characters i and i+1
    let EvenPal = isPal(s, i, i + 1);

    // Determine the longest palindrome substring among OddPal and EvenPal
    let longestPal = OddPal.length > EvenPal.length ? OddPal : EvenPal;

    // If the current palindrome substring is longer than the previously found longest, update longest
    if (longestPal.length > longest.length) {
      longest = longestPal;
    }
  }
  // Return the longest palindrome found
  return longest;
};
