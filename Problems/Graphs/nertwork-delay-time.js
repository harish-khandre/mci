class PriorityQueue {
  constructor() {
    this.heap = []; // Initialize an empty array to store elements of the priority queue
  }

  enqueue(value, priority) {
    const node = { value, priority }; // Create a node with value and priority
    this.heap.push(node); // Add the node to the end of the heap
    this.bubbleUp(this.heap.length - 1); // Maintain the heap property by bubbling up the newly added node
  }

  dequeue() {
    const min = this.heap[0]; // Get the minimum element (root) of the heap
    const end = this.heap.pop(); // Remove the last element of the heap
    if (this.heap.length > 0) {
      this.heap[0] = end; // Move the last element to the root position
      this.sinkDown(0); // Maintain the heap property by sinking down the root element
    }
    return min; // Return the minimum element
  }

  bubbleUp(index) {
    const node = this.heap[index]; // Get the node at the specified index
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2); // Calculate the parent index
      const parent = this.heap[parentIndex]; // Get the parent node
      if (node.priority >= parent.priority) break; // If the node's priority is greater than or equal to its parent's priority, stop bubbling up
      this.heap[parentIndex] = node; // Swap the node with its parent
      this.heap[index] = parent;
      index = parentIndex; // Update the index to the parent index
    }
  }

  sinkDown(index) {
    const length = this.heap.length;
    const node = this.heap[index]; // Get the node at the specified index
    while (true) {
      const leftChildIndex = 2 * index + 1; // Calculate the left child index
      const rightChildIndex = 2 * index + 2; // Calculate the right child index
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]; // Get the left child node
        if (leftChild.priority < node.priority) {
          swap = leftChildIndex; // If left child's priority is less than node's priority, set swap to left child index
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]; // Get the right child node
        if (
          (swap === null && rightChild.priority < node.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex; // If right child's priority is less than node's priority or less than left child's priority, set swap to right child index
        }
      }

      if (swap === null) break; // If there is no swap needed, stop sinking down
      this.heap[index] = this.heap[swap]; // Swap the node with the child
      this.heap[swap] = node;
      index = swap; // Update the index to the swapped child index
    }
  }

  isEmpty() {
    return this.heap.length === 0; // Check if the priority queue is empty
  }
}

const networkDelayTime = (times, n, k) => {
  const distances = Array(n + 1).fill(Infinity); // Initialize an array to store the shortest distances from the source to each node
  distances[k] = 0; // Distance from source to itself is 0

  const graph = {}; // Initialize an object to store the graph as an adjacency list
  for (const [source, target, time] of times) {
    if (!graph[source]) graph[source] = [];
    graph[source].push({ target, time }); // Add the target node and time to the list of neighbors for the source node
  }

  const pq = new PriorityQueue(); // Initialize a priority queue for Dijkstra's algorithm
  pq.enqueue(k, 0); // Enqueue the source node with distance 0

  while (!pq.isEmpty()) {
    const { value: currentNode, priority: currentDistance } = pq.dequeue(); // Dequeue the node with the shortest distance
    if (currentDistance > distances[currentNode]) continue; // If the recorded distance is shorter, skip
    if (graph[currentNode]) {
      for (const { target, time } of graph[currentNode]) {
        const newDistance = currentDistance + time; // Calculate the new distance from the source to the neighbor node
        if (newDistance < distances[target]) {
          distances[target] = newDistance; // Update the shortest distance if the new distance is shorter
          pq.enqueue(target, newDistance); // Enqueue the neighbor node with its new distance
        }
      }
    }
  }

  let maxTime = -Infinity; // Initialize the maximum time to -Infinity
  for (let i = 1; i <= n; i++) {
    if (distances[i] === Infinity) return -1; // If any node is unreachable, return -1
    maxTime = Math.max(maxTime, distances[i]); // Find the maximum distance from the source node
  }

  return maxTime; // Return the maximum time
};
