/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  // count the task frequencies -- O(n)
  const count = {};
  for (const task of tasks) {
    if (!(task in count)) count[task] = 0;
    count[task]++;
  }

  // Store the frequencies (count) in the Max heap
  const maxHeap = new MaxHeap();
  for (const n of Object.values(count)) maxHeap.insert(n);

  const deque = []; // pair of [count, idleTime]
  let time = 0;

  while (maxHeap.size() || deque.length) {
    time++;
    // perform the most freq task, add the remaining count in Deque to perform later
    if (maxHeap.size()) {
      const cnt = maxHeap.getMax() - 1;
      if (cnt !== 0) deque.push([cnt, time + n]); // time + n -> when this task will be available next
    }
    // When the time comes, take the task from Deque, add it to the maxHeap (for the CPU to perform)
    if (deque.length && deque[0][1] === time) maxHeap.insert(deque.shift()[0]); // Note: the JavaScript shift() methods runs in linear time. This might sum up to the complexity. But we can ignore it as we are not focuing on Language specific.
  }
  return time;
};

// Custom JavaScript MaxHeap Implementation
function MaxHeap() {
  this.list = [];

  this.maxHeapify = (i) => {
    const n = this.list.length;
    let largest = i;
    const l = 2 * i + 1; // left child index
    const r = 2 * i + 2; // right child index

    if (l < n && this.list[l] > this.list[largest]) largest = l;
    if (r < n && this.list[r] > this.list[largest]) largest = r;

    if (largest !== i) {
      [this.list[i], this.list[largest]] = [this.list[largest], this.list[i]];
      this.maxHeapify(largest);
    }
  };

  this.insert = (value) => {
    this.list.push(value);
    let i = this.list.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.list[i] > this.list[parent]) {
        [this.list[i], this.list[parent]] = [this.list[parent], this.list[i]];
        i = parent;
      } else {
        break;
      }
    }
  };

  this.delete = () => {
    if (this.list.length === 0) return null;
    if (this.list.length === 1) return this.list.pop();

    const max = this.list[0];
    this.list[0] = this.list.pop();
    this.maxHeapify(0);
    return max;
  };

  this.findMax = () => (this.list.length > 0 ? this.list[0] : null);
  this.getMax = () => this.delete();
  this.size = () => this.list.length;
}
