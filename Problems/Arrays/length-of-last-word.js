const lengthOfLastWord = (s) => {
  let words = s.split(" ");
  let lastWordLength = 0;

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== "") {
      lastWordLength = words[i].length;
      break;
    }
  }

  return lastWordLength;
};
