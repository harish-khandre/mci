/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Function to find the length of the longest substring with at most k replacements
const characterReplacement = (s, k) => {
  // Initialize variables to keep track of the frequency of characters,
  // the length of the longest substring, and the left and right pointers
  let topF = 0; // Top frequency of any character in the current window
  let longest = 0; // Length of the longest valid substring
  let left = 0; // Left pointer of the sliding window
  let right = 0; // Right pointer of the sliding window
  let map = new Map(); // Map to store the frequency of characters in the current window

  // Iterate through the string using the sliding window approach
  while (right < s.length) {
    // Update the frequency of the character at the right pointer
    map.set(s[right], (map.get(s[right]) || 0) + 1);

    // Update the top frequency with the maximum frequency in the current window
    topF = Math.max(topF, map.get(s[right]));

    // Check if the current window can be made valid by replacing at most k characters
    if (right - left + 1 - topF > k) {
      // If the window is not valid, move the left pointer to make the window valid
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    } else {
      // If the window is valid, update the length of the longest substring
      longest = Math.max(longest, right - left + 1);
    }

    // Move the right pointer to expand the window
    right++;
  }

  // Return the length of the longest valid substring
  return longest;
};
