const fullJustify = (words, maxWidth) => {
  // Initialize an array to hold the justified lines of text
  const result = [];
  // Initialize the starting index of the current line
  let i = 0;

  // Loop through all words in the array
  while (i < words.length) {
    // Initialize the ending index of the current line
    let j = i + 1;
    // Calculate the length of the current line with the first word
    let lineLength = words[i].length;

    // Determine the range of words that can fit in the current line without exceeding maxWidth
    while (
      j < words.length &&
      lineLength + words[j].length + j - i <= maxWidth
    ) {
      // Add the length of the next word and account for a space between words
      lineLength += words[j].length;
      j++;
    }

    // Calculate the difference in width between the current line and maxWidth
    const diff = maxWidth - lineLength;
    // Calculate the number of spaces needed between words
    const spaces = j - i - 1;

    // Initialize the current line with the first word
    let line = words[i];

    // Check if this is the last line or if there is only one word in the line
    if (j === words.length || spaces === 0) {
      // For the last line or single word lines, simply add the remaining words and spaces at the end
      for (let k = i + 1; k < j; k++) {
        line += " " + words[k];
      }

      // Fill the rest of the line with spaces until it reaches maxWidth
      while (line.length < maxWidth) {
        line += " ";
      }
    } else {
      // Calculate the base space to distribute between words
      const space = " ".repeat(Math.floor(diff / spaces));
      // Calculate any extra spaces to be distributed across words
      const extraSpace = diff % spaces;

      // Construct the line with justified spacing between words
      for (let k = i + 1; k < j; k++) {
        // Add the base space plus an extra space if needed
        line += space + (k - i <= extraSpace ? " " : "") + words[k];
      }
    }

    // Add the fully justified line to the result array
    result.push(line);
    // Move to the next line of words
    i = j;
  }

  // Return the array of justified lines of text
  return result;
};
