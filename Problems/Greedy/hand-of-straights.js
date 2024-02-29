// Function to check if the given hand can be grouped into straight hands of a specified size
const isNStraightHand = (hand, groupSize, count = new Map()) => {
  // Get frequency map of the hand
  const map = getFrequencyMap(hand); /* Time O(N) | Space O(N) */
  // Get unique sorted hand
  const sortUniqHand =
    getUniqueHand(hand); /* Time O(N * Log(N)) | Space O(N) */

  // Perform search to check if grouping is possible
  return search(groupSize, map, sortUniqHand); /* Time O(N * K) */
};

// Function to generate a frequency map of elements in the hand
const getFrequencyMap = (hand, map = new Map()) => {
  for (const _hand of hand) {
    /* Time O(N) */
    // Increment the count for each element in the map
    const val = (map.get(_hand) || 0) + 1;
    map.set(_hand, val); /* Space O(N) */
  }

  return map;
};

// Function to get unique elements of the hand in sorted order
const getUniqueHand = (hand) =>
  [...new Set(hand)] /* Time O(N) | Space O(N) */
    .sort(
      (a, b) => b - a,
    ); /* Time O(N * Log(N)) | Space HeapSort O(1) | Space QuickSort O(log(N)) */

// Function to search for straight hands
const search = (groupSize, map, sortUniqHand) => {
  while (sortUniqHand.length) {
    /* Time O(N) */
    // Get the smallest element in the remaining unique sorted hand
    const smallest = sortUniqHand[sortUniqHand.length - 1];

    // Check if elements can be grouped starting from the smallest
    for (let i = smallest; i < smallest + groupSize; i++) {
      /* Time O(K) */
      // If the element does not exist in the map, grouping is not possible
      if (!map.has(i)) return false;

      // Decrease the count for the element in the map
      const val = map.get(i) - 1;
      map.set(i, val);

      // Check if the count becomes zero, if so, remove it from the unique sorted hand
      let isEqual = map.get(i) === 0;
      if (!isEqual) continue;

      isEqual = i === sortUniqHand[sortUniqHand.length - 1];
      if (!isEqual) return false;

      sortUniqHand.pop();
    }
  }

  return true;
};
