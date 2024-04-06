const candy = (ratings) => {
  const n = ratings.length;
  const candies = new Array(n).fill(1); // Initialize an array to store the number of candies each child gets

  // First pass: Traverse from left to right
  for (let i = 1; i < n; i++) {
    // If the current child's rating is greater than the previous one,
    // assign one more candy to the current child than the previous one.
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  // Second pass: Traverse from right to left, while simultaneously updating the maximum number of candies
  let totalCandies = candies[n - 1]; // Initialize with the last element
  for (let i = n - 2; i >= 0; i--) {
    // If the current child's rating is greater than the next one,
    // update the current child's number of candies to be the maximum of its current value and one more than the next child.
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
    totalCandies += candies[i]; // Update the total number of candies while traversing from right to left
  }

  return totalCandies; // Return the total number of candies
};
