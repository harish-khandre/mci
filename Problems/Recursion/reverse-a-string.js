function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  }
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

console.log(reverseStringRecursive("yoyo master"));

// retsam oyoy

/*
- str.substr(1): This method is used to extract a substring from the original string (str). In this case, it starts from index 1 and goes until the end of the string. This effectively removes the first character from the original string.

- str.charAt(0): This method retrieves the character at the specified index from the original string (str). In this case, it gets the first character (at index 0) of the original string.
*/
