const checkValidString = (s) => {
  let minOpen = 0; // Minimum possible open parentheses '('
  let maxOpen = 0; // Maximum possible open parentheses '('

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      // If character is '('
      minOpen++; // Increment both minOpen and maxOpen
      maxOpen++;
    } else if (char === ")") {
      // If character is ')'
      minOpen = Math.max(minOpen - 1, 0); // Decrement minOpen but keep it non-negative
      maxOpen--; // Decrement maxOpen
    } else {
      // If character is '*'
      minOpen = Math.max(minOpen - 1, 0); // Decrement minOpen but keep it non-negative
      maxOpen++; // Increment maxOpen
    }
    // If maxOpen becomes negative, it means there are more ')' than '(' or '*' allowed
    // Therefore, the string is invalid
    if (maxOpen < 0) return false;
  }

  // At the end, if minOpen is not 0, it means there are unmatched '('
  // Therefore, the string is invalid
  return minOpen === 0;
};
