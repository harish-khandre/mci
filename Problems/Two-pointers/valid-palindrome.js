/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome
*/
const check = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
const isPalindrome = (s) => {
  const regex = /[^a-zA-Z0-9]/g;
  const str = s.replace(regex, "").toLowerCase();
  return check(str);
};

//another one

const isPalindrome2 = (s) => {
  const str = s
    .replaceAll(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");

  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

// without two pointers

const isPalindrome3 = (s) => {
  const str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const rev = str.split("").reverse().join("");
  return str === rev ? true : false;
};
