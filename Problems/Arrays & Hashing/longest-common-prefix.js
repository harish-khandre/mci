// my solution
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
};

// other solution

var _longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  // Helper function to check if the prefix is common among all strings
  const isCommonPrefix = (prefix) => {
    for (let word of strs) {
      if (!word.startsWith(prefix)) {
        return false;
      }
    }
    return true;
  };

  // Binary search for the longest common prefix
  let minLength = Math.min(...strs.map((str) => str.length));
  let low = 1;
  let high = minLength;
  let prefix = "";

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let candidate = strs[0].slice(0, mid);
    if (isCommonPrefix(candidate)) {
      prefix = candidate;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return prefix;
};
