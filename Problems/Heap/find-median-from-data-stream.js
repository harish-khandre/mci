// MedianFinder class using two heaps (min heap and max heap)
const MedianFinder = function () {
  // Min heap for the second half of sorted numbers
  this.minHeap = new MinHeap();
  // Max heap for the first half of sorted numbers
  this.maxHeap = new MaxHeap();
};

// Add a number to the median finder
MedianFinder.prototype.addNum = function (num) {
  // If maxHeap is empty or the number is less than or equal to the maxHeap's root
  if (this.maxHeap.isEmpty() || num <= this.maxHeap.peek()) {
    this.maxHeap.push(num); // Add to maxHeap
  } else {
    this.minHeap.push(num); // Add to minHeap
  }

  // Balance the heaps
  if (this.maxHeap.size() > this.minHeap.size() + 1) {
    this.minHeap.push(this.maxHeap.pop());
  } else if (this.minHeap.size() > this.maxHeap.size()) {
    this.maxHeap.push(this.minHeap.pop());
  }
};

// Find the median
MedianFinder.prototype.findMedian = function () {
  // If maxHeap is empty, return null
  if (this.maxHeap.isEmpty()) {
    return null;
  }

  // Determine if the total number of elements is even or odd
  if (this.maxHeap.size() === this.minHeap.size()) {
    // If even, return the average of maxHeap's root and minHeap's root
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
  // If odd, return the root of maxHeap
  return this.maxHeap.peek();
};

// MinHeap class for a min-heap data structure
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Add a value to the min heap
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Remove and return the smallest value from the min heap
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const root = this.heap[0];
    const last = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return root;
  }

  // Return the smallest value without removing it from the heap
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // Return the size of the min heap
  size() {
    return this.heap.length;
  }

  // Check if the min heap is empty
  isEmpty() {
    return this.size() === 0;
  }

  // Restore the heap property by moving a newly added element to its correct position
  heapifyUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Restore the heap property by moving the root down to its correct position
  heapifyDown() {
    let index = 0;
    const length = this.size();
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;

      if (leftChild < length && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }

      if (rightChild < length && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  // Swap two elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

// MaxHeap class for a max-heap data structure
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Add a value to the max heap
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Remove and return the largest value from the max heap
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const root = this.heap[0];
    const last = this.heap.pop();

    if (this.size() > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return root;
  }

  // Return the largest value without removing it from the heap
  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // Return the size of the max heap
  size() {
    return this.heap.length;
  }

  // Check if the max heap is empty
  isEmpty() {
    return this.size() === 0;
  }

  // Restore the heap property by moving a newly added element to its correct position
  heapifyUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Restore the heap property by moving the root down to its correct position
  heapifyDown() {
    let index = 0;
    const length = this.size();
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let largest = index;

      if (leftChild < length && this.heap[leftChild] > this.heap[largest]) {
        largest = leftChild;
      }

      if (rightChild < length && this.heap[rightChild] > this.heap[largest]) {
        largest = rightChild;
      }

      if (largest !== index) {
        this.swap(index, largest);
        index = largest;
      } else {
        break;
      }
    }
  }

  // Swap two elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}
