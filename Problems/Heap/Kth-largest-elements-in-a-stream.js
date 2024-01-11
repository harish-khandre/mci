// KthLargest class constructor
const KthLargest = function (k, nums) {
  // Initialize KthLargest with k and initial nums array
  this.k = k;
  // Take the first k elements and sort to form a min-heap
  this.nums = nums.slice(0, k).sort((a, b) => a - b);

  // Add the remaining elements to the heap
  for (let i = k; i < nums.length; i++) {
    this.add(nums[i]);
  }
};

// Method to add a new element to the KthLargest min-heap
KthLargest.prototype.add = function (val) {
  if (this.nums.length < this.k) {
    // If the heap is not yet of size k, simply push the value and heapify
    this.nums.push(val);
    this.heapifyUp(this.nums.length - 1);
  } else if (val > this.nums[0]) {
    // If the value is greater than the minimum element, replace the minimum and heapify
    this.nums[0] = val;
    this.heapifyDown(0);
  }
  // Return the current kth largest element
  return this.nums[0];
};

// Helper method to perform heapify-up operation
KthLargest.prototype.heapifyUp = function (i) {
  while (i !== 0) {
    const parent = Math.floor((i - 1) / 2);
    // If the parent is smaller than or equal to the current element, stop
    if (this.nums[parent] <= this.nums[i]) return;
    // Swap parent and current element
    [this.nums[parent], this.nums[i]] = [this.nums[i], this.nums[parent]];
    // Move to the parent index
    i = parent;
  }
};

// Helper method to perform heapify-down operation
KthLargest.prototype.heapifyDown = function (i) {
  while (true) {
    const left = i * 2 + 1;
    const right = i * 2 + 2;
    let pos = left;

    // If left child is beyond the array bounds, stop
    if (left >= this.nums.length) return;

    // If right child exists and is smaller than left child, update pos
    if (right < this.nums.length && this.nums[right] < this.nums[left]) {
      pos = right;
    }

    // If the current element is smaller than or equal to the smallest child, stop
    if (this.nums[i] <= this.nums[pos]) return;

    // Swap current element with the smallest child
    [this.nums[pos], this.nums[i]] = [this.nums[i], this.nums[pos]];
    // Move to the child index
    i = pos;
  }
};
