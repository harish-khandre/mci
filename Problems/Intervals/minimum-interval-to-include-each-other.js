const minInterval = (intervals, queries) => {
  // Sort intervals based on start time
  intervals.sort((a, b) => a[0] - b[0]);
  // Sort queries
  const queriesSorted = [...queries].sort((a, b) => a - b);
  // Object to store output
  const output = {};
  let i = 0;
  // Priority queue array
  let pq = [];

  // Function to enqueue into the priority queue
  const enqueue = (interval) => {
    pq.push(interval);
    let currentIndex = pq.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    // Bubble up to maintain heap property
    while (currentIndex > 0 && pq[currentIndex][0] < pq[parentIndex][0]) {
      [pq[currentIndex], pq[parentIndex]] = [pq[parentIndex], pq[currentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  };

  // Function to dequeue from the priority queue
  const dequeue = () => {
    if (pq.length === 0) return null;

    // Remove the minimum element
    const min = pq[0];
    pq[0] = pq[pq.length - 1];
    pq.pop();

    let currentIndex = 0;
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;

    // Bubble down to maintain heap property
    while (leftChildIndex < pq.length) {
      let minIndex = currentIndex;

      if (pq[leftChildIndex][0] < pq[minIndex][0]) {
        minIndex = leftChildIndex;
      }

      if (
        rightChildIndex < pq.length &&
        pq[rightChildIndex][0] < pq[minIndex][0]
      ) {
        minIndex = rightChildIndex;
      }

      if (minIndex === currentIndex) break;

      [pq[currentIndex], pq[minIndex]] = [pq[minIndex], pq[currentIndex]];

      currentIndex = minIndex;
      leftChildIndex = 2 * currentIndex + 1;
      rightChildIndex = 2 * currentIndex + 2;
    }

    return min;
  };

  // Iterate through sorted queries
  for (const query of queriesSorted) {
    // Process intervals that intersect with the current query
    while (i < intervals.length && intervals[i][0] <= query) {
      const [start, end] = intervals[i];
      const length = end - start + 1;
      enqueue([length, end]); // Add interval to priority queue
      i++;
    }

    // Remove intervals that are no longer relevant
    while (pq.length > 0 && pq[0][1] < query) {
      dequeue();
    }

    // Store the minimum length in output for the current query
    output[query] = pq.length > 0 ? pq[0][0] : -1;
  }

  // Map the output for each query
  return queries.map((query) => output[query]);
};
