// Function to generate letter combinations for a given set of digits
const letterCombinations = (digits, combination = [], combinations = []) => {
  // Check if it's the base case (no more digits left)
  const isBaseCase = !digits;

  if (isBaseCase) {
    // If combination is not empty, convert it to a string and add to combinations
    if (combination.length) combinations.push(combination.join(""));

    return combinations;
  }

  // Get the letters corresponding to the current digit
  const letters = phoneButtons[digits[0]];

  // Iterate through each letter and backtrack
  for (const char of letters) {
    backTrack(digits, char, combination, combinations);
  }

  return combinations;
};

// Helper function for backtracking
const backTrack = (digits, char, combination, combinations) => {
  // Add the current character to the combination
  combination.push(char);

  // Recursively call letterCombinations with the remaining digits
  letterCombinations(digits.slice(1), combination, combinations);

  // Backtrack by removing the last character added to the combination
  combination.pop();
};

// Mapping of digits to corresponding letters on a phone keypad
const phoneButtons = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
