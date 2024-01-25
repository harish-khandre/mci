const ladderLength = (beginWord, endWord, wordList) => {
  // Check if endWord is not present in the wordList
  if (!wordList.includes(endWord)) return 0;

  // Add the beginWord to the wordList
  wordList.push(beginWord);

  // Create a map to store patterns (* substitutions) and corresponding words
  const nei = new Map();
  for (const word of wordList) {
    for (let j = 0; j < word.length; j++) {
      const pattern = `${word.substring(0, j)}*${word.substring(j + 1)}`;
      const arr = nei.get(pattern) ? nei.get(pattern) : [];
      arr.push(word);
      nei.set(pattern, arr);
    }
  }

  // Set to keep track of visited words
  const visit = new Set();
  visit.add(beginWord);

  // Queue for BFS
  const q = [];
  q.push(beginWord);

  // Variable to store the result
  res = 1;

  // BFS loop
  while (q.length) {
    const qLen = q.length;

    for (let i = 0; i < qLen; i++) {
      // Dequeue a word from the front of the queue
      const word = q.shift();

      // If the word is equal to endWord, return the result
      if (word === endWord) return res;

      // Explore neighbors by changing one character at a time
      for (let j = 0; j < word.length; j++) {
        const pattern = `${word.substring(0, j)}*${word.substring(j + 1)}`;
        const arr = nei.get(pattern) ?? [];

        for (const neiWord of arr) {
          // If the neighbor is not visited, mark it as visited and enqueue
          if (!visit.has(neiWord)) {
            visit.add(neiWord);
            q.push(neiWord);
          }
        }
      }
    }
    // Increment the result for each level of BFS
    res += 1;
  }

  // If no transformation sequence is found, return 0
  return 0;
};
