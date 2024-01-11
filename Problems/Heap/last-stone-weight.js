const lastStoneWeight = (stones) => {
  const heap = new MaxPriorityQueue();

  for (const stone of stones) heap.enqueue(stone);

  while (heap.size() > 1) {
    const diff = heap.dequeue().element - heap.dequeue().element;
    if (diff > 0) heap.enqueue(diff);
  }
  return heap.size() === 0 ? 0 : heap.front().element;
};

// better performance in time complexity
const lastStoneWeight2 = (stones) => {
  for (let i = Math.floor((stones.length - 1) / 2); i >= 0; i--)
    heapify(stones, i);

  while (stones.length >= 2) {
    const max = stones[0];
    const nextMaxIndex = stones[1] > (stones[2] ?? -Infinity) ? 1 : 2;
    const max2 = stones[nextMaxIndex];

    if (max === max2) {
      if (stones.length === 2) return 0;
      if (nextMaxIndex >= stones.length - 1) {
        stones.pop();
        stones[0] = stones.pop();
      } else {
        stones[nextMaxIndex] = stones.pop();
        stones[0] = stones.pop();
      }
    } else {
      const diff = stones[0] - stones[nextMaxIndex];
      if (nextMaxIndex >= stones.length - 1) stones.pop();
      else stones[nextMaxIndex] = stones.pop();

      stones[0] = diff;
    }

    heapify(stones, nextMaxIndex);
    heapify(stones, 0);
  }

  return stones[0];
};

const heapify = (nums, i) => {
  const left = i * 2 + 1;
  const right = i * 2 + 2;
  let highest = i;

  if (nums[left] > nums[highest]) highest = left;
  if (nums[right] > nums[highest]) highest = right;

  if (highest !== i) {
    const temp = nums[i];
    nums[i] = nums[highest];
    nums[highest] = temp;

    heapify(nums, highest);
  }
};
