// Main function to check if string s matches pattern p
const isMatch = (s, p) => {
  // Create a 2D array for caching results
  var c = Array.from({ length: s.length + 1 }, () =>
    Array(p.length + 1).fill(undefined),
  );
  // Call the helper function with initial indices and caching array
  return isMatchHelper(s, 0, p, 0, c);
};

// Helper function to recursively check if string s matches pattern p
const isMatchHelper = function (s, si, p, pi, c) {
  // If both string and pattern are exhausted, it's a match
  if (pi >= p.length && si >= s.length) return true;
  // If result is already cached, return it
  if (c[si][pi] !== undefined) return c[si][pi];

  // Check if current characters match
  var cimatch =
    si < s.length && pi < p.length && (s[si] === p[pi] || p[pi] === ".");
  // If next character in pattern is '*', handle it
  if (pi + 1 < p.length && p[pi + 1] === "*") {
    // Recursive call to skip '*' or match '*' with preceding character
    var isM =
      isMatchHelper(s, si, p, pi + 2, c) ||
      (cimatch && isMatchHelper(s, si + 1, p, pi, c));
    // Cache the result
    c[si][pi] = isM;
    return isM;
  }

  // If next character in pattern is not '*', proceed with normal matching
  var isM2 = cimatch && isMatchHelper(s, si + 1, p, pi + 1, c);
  // Cache the result
  c[si][pi] = isM2;
  return isM2;
};
