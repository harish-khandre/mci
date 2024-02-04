// Function to check if s1 is a permutation of any substring of s2
const checkInclusion = (s1, s2) => {
  // Get the lengths of the input strings
  const s1len = s1.length;
  const s2len = s2.length;

  // If s1 is longer than s2, it cannot be a permutation
  if (s1len > s2len) return false;

  // Initialize an array to store the count of each character in s1
  const mem = new Array(26).fill(0);

  // ASCII code of 'a' to be used for indexing in the mem array
  const aco = "a".charCodeAt(0);

  // Count the occurrences of each character in s1
  for (let i = 0; i < s1len; i++) {
    mem[s1.charCodeAt(i) - aco]++;
  }

  // Sliding window approach to iterate through s2
  for (let l = 0, r = 0; r < s2len; r++) {
    // If the window size is greater than s1, move the left pointer
    if (r >= s1len) {
      const lco = s2.charCodeAt(l) - aco;
      mem[lco]++;
      l++;
    }

    // Update the count of the current character in the window
    const rco = s2.charCodeAt(r) - aco;
    mem[rco]--;

    // Check if all counts in the mem array are zero, indicating a permutation
    if (!mem.some((a) => a !== 0)) return true;
  }

  // No permutation found
  return false;
};
