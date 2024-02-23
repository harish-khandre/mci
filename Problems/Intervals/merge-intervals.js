const merge = (intervals) => {
  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize an array to store merged intervals
  const merged = [];

  // Initialize the currentInterval with the first interval
  let currentInterval = intervals[0];

  // Iterate over the intervals starting from the second one
  for (let i = 1; i < intervals.length; i++) {
    const [currentStart, currentEnd] = currentInterval;
    const [nextStart, nextEnd] = intervals[i];

    // Check if there's an overlap between current and next intervals
    if (nextStart <= currentEnd) {
      // Merge the intervals if there's an overlap
      currentInterval[1] = Math.max(currentEnd, nextEnd);
    } else {
      // If there's no overlap, push the currentInterval to merged array
      // and update currentInterval to the next interval
      merged.push(currentInterval);
      currentInterval = intervals[i];
    }
  }

  // Push the last remaining interval into the merged array
  merged.push(currentInterval);

  // Return the merged intervals
  return merged;
};
