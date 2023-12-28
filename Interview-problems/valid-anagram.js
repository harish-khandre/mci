/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true */

const isAnagram = (s, t) => {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

//faster version is abusrd and i didnt understand
