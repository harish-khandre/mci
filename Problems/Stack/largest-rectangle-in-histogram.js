// Function definition to calculate the largest rectangle area in a histogram.
function largestRectangleArea(heights) {
  // Get the total number of bars in the histogram
  const n = heights.length;

  // Initialize arrays with size 'n' to store the left and right boundaries for each bar
  const left = new Array(n); //dont change it to ->const left = [];
  const right = new Array(n);

  // Stack is used to keep track of the indices of the bars
  const stack = [];

  // Iterate through the histogram from left to right
  for (let i = 0; i < n; i++) {
    // Fill 'left' array
    // If the stack is empty, the left boundary for this bar is 0
    if (stack.length === 0) {
      left[i] = 0;
      stack.push(i);
    } else {
      // If the stack is not empty, pop the stack until a bar with height greater
      // than the current is found or stack gets empty.
      while (
        stack.length !== 0 &&
        heights[stack[stack.length - 1]] >= heights[i]
      )
        stack.pop();

      // The index of the last popped bar (plus one) is the left boundary for the current bar - making
      // sure that there's a value. If not, left boundary is 0.
      left[i] = stack.length === 0 ? 0 : stack[stack.length - 1] + 1;
      // Push the current bar's index into the stack
      stack.push(i);
    }
  }
  // Clear the stack before we start computing right boundaries
  stack.length = 0;

  // Now iterate through the histogram from right to left to fill the 'right' array
  for (let i = n - 1; i >= 0; i--) {
    if (stack.length === 0) {
      // If the stack is empty, the right boundary for this bar is the last index (n - 1)
      right[i] = n - 1;
      stack.push(i);
    } else {
      // If the stack is not empty, pop the stack until a bar with
      // height greater than the current is found or stack gets empty.
      while (
        stack.length !== 0 &&
        heights[stack[stack.length - 1]] >= heights[i]
      )
        stack.pop();

      // The index of the last popped bar (minus one) is the right boundary for the current bar -
      // making sure that there's a value. If not, right boundary is the last index (n - 1).
      right[i] = stack.length === 0 ? n - 1 : stack[stack.length - 1] - 1;
      // Push the current bar's index into the stack
      stack.push(i);
    }
  }

  // This variable will store the maximum area found
  let maxArea = 0;
  for (let i = 0; i < n; i++) {
    // Iterate through each bar in the histogram
    // Calculate area rectangle with height of the current bar - width is the difference between
    // right and left boundaries (plus one) for each rectangle
    maxArea = Math.max(maxArea, heights[i] * (right[i] - left[i] + 1));
  }

  // Return the maximum area which stores the largest rectangle area within the histogram
  return maxArea;
}
