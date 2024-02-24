const eraseOverlapIntervals = (intervals) => {
  // Sort intervals based on end points.
  intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
    aEnd !== bEnd ? aEnd - bEnd : aStart - bStart,
  );

  // Call helper function to calculate the number of gaps.
  return getGaps(intervals);
};

const getGaps = (intervals, gaps = 1) => {
  // Remove the first interval from the array.
  const prev = intervals.shift();

  // Iterate over remaining intervals.
  for (const curr of intervals) {
    // Destructure previous and current interval's start and end points.
    const [prevStart, prevEnd] = prev;
    const [currStart, currEnd] = curr;

    // Check if there is a gap between previous interval's end and current interval's start.
    const hasGap = prevEnd <= currStart;
    if (!hasGap) continue;

    // Merge intervals and increment gaps count.
    prev[1] = curr[1];
    gaps++;
  }

  // Calculate the number of non-overlapping intervals.
  return intervals.length + 1 - gaps;
};
