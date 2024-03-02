var partitionLabels = function (s) {
  const output = []; // Array to store the lengths of partitions
  let start = 0; // Start index of the current partition
  let end = 0; // End index of the current partition

  // Iterate through the string to partition it
  for (let i = 0; i < s.length; i++) {
    // Update the end index with the maximum of the current end index and the last occurrence of the character in the remaining part of the string
    end = Math.max(end, s.lastIndexOf(s[i]));

    // If the current index equals the end index, it means we've reached the end of the current partition
    if (i === end) {
      // Calculate the length of the partition and push it to the output array
      output.push(end - start + 1);
      // Update the start index for the next partition
      start = i + 1;
    }
  }

  return output; // Return the array containing the lengths of partitions
};
