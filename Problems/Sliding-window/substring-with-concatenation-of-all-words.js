/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

function findSubstring(s, words) {
  const results = [];
  const wordLength = words[0].length;
  const substringLength = words.length * wordLength;
  const wordCount = new Map();

  // Build the frequency map for the words
  words.forEach((word) => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });

  // Function to slide the window and check for valid concatenations
  for (let i = 0; i < wordLength; i++) {
    let left = i;
    let right = i;
    let count = 0;
    let seenWords = new Map();

    while (right + wordLength <= s.length) {
      let word = s.slice(right, right + wordLength);
      right += wordLength;

      if (wordCount.has(word)) {
        seenWords.set(word, (seenWords.get(word) || 0) + 1);
        count++;

        // If a word count exceeds its frequency in 'words', move 'left' pointer
        while (seenWords.get(word) > wordCount.get(word)) {
          let leftWord = s.slice(left, left + wordLength);
          seenWords.set(leftWord, seenWords.get(leftWord) - 1);
          count--;
          left += wordLength;
        }

        // When a valid substring is found, push the start index to results
        if (count === words.length) {
          results.push(left);
          let leftWord = s.slice(left, left + wordLength);
          seenWords.set(leftWord, seenWords.get(leftWord) - 1);
          count--;
          left += wordLength;
        }
      } else {
        // Reset the window if the word is not found in 'words'
        seenWords.clear();
        count = 0;
        left = right;
      }
    }
  }

  return results;
}

// Example usage:
const s = "abaaabbb";
const words = ["ab", "bb"];
console.log(findSubstring(s, words)); // Output: [4]
