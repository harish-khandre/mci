// This function implements the quicksort algorithm on an array of numbers.
// It takes the array 'arr', the low index 'lo', and the high index 'hi'.
function qs(arr: number[], lo: number, hi: number): void {
  // Base case: If the low index is greater than or equal to the high index,
  // the array is already sorted or has only one element, so no further sorting is needed.
  if (lo >= hi) {
    return;
  }

  // Find the pivot index using the partition function and its result.
  const pivotIdx = partition(arr, lo, hi);

  // Recursively apply quicksort to the left and right subarrays of the pivot.
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

// This function performs the partition step of the quicksort algorithm.
// It takes the array 'arr', the low index 'lo', and the high index 'hi'.
// It returns the index of the pivot element after rearranging elements in the array.
function partition(arr: number[], lo: number, hi: number): number {
  // Choose the pivot element (in this case, the element at the high index 'hi').
  const pivot = arr[hi];

  // Initialize the index 'idx' to track the position of the smaller elements.
  let idx = lo - 1;

  // Iterate through elements from low index to one less than the high index.
  for (let i = 0; i < hi; i++) {
    // If the current element is less than or equal to the pivot,
    // swap it with the element at the 'idx' position and increment 'idx'.
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  // Move the pivot to its correct sorted position by swapping it with the element at 'idx + 1'.
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  // Return the index of the pivot in the rearranged array.
  return idx;
}

// Exported function for easy use. It applies quicksort to the entire array.
export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
