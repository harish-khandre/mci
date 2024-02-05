// This function finds the minimum window in string 's' containing all characters of string 't'.
function minWindow(s, t) {
  // Object to store the count of characters in string 't'.
  const charCount = {};
  // Counter for the number of required characters to form the window.
  let requiredChars = 0;
  // Two pointers to represent the window - 'left' and 'right'.
  let left = 0;
  // Variables to track the minimum window size and its starting position.
  let minWindowSize = Infinity;
  let minWindowStart = 0;

  // Count the occurrences of characters in string 't' and initialize the requiredChars counter.
  for (const char of t) {
    charCount[char] = (charCount[char] || 0) + 1;
    requiredChars++;
  }

  // Sliding window approach using 'right' pointer.
  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];

    // Update the requiredChars counter when a character in 't' is found in 's'.
    if (charCount[rightChar] > 0) {
      requiredChars--;
    }

    // Update the charCount for the current character in 's'.
    charCount[rightChar] = (charCount[rightChar] || 0) - 1;

    // Check if the current window contains all required characters.
    while (requiredChars === 0) {
      // Update the minimum window size and starting position if the current window is smaller.
      if (right - left + 1 < minWindowSize) {
        minWindowSize = right - left + 1;
        minWindowStart = left;
      }

      // Move 'left' pointer to the right to shrink the window.
      const leftChar = s[left];
      charCount[leftChar]++;

      // Update requiredChars counter when a character is removed from the window.
      if (charCount[leftChar] > 0) {
        requiredChars++;
      }

      left++;
    }
  }

  // Return the result based on whether a valid window was found or not.
  return minWindowSize === Infinity
    ? ""
    : s.substr(minWindowStart, minWindowSize);
}

// Example usage:
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""
