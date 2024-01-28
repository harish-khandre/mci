// Function to find the minimum eating speed required to eat all bananas within the given hours
const minEatingSpeed = (piles, h) => {
  // Initialize the search space with the minimum and maximum possible eating speeds
  let [left, right] = [1, Math.max(...piles)];

  // Perform binary search within the search space
  while (left < right) {
    // Calculate the middle point of the search space
    const mid = (left + right) >> 1;

    // Calculate the total hours required to eat all bananas at the current eating speed
    const hourSpent = getHourSpent(mid, piles);

    // Check if the total hours spent is greater than the target hours
    const isTargetGreater = h < hourSpent;
    if (isTargetGreater) {
      // If so, adjust the search space to the right half
      left = mid + 1;
    }

    // Check if the total hours spent is less than or equal to the target hours
    const isTargetLess = hourSpent <= h;
    if (isTargetLess) {
      // If so, adjust the search space to the left half
      right = mid;
    }
  }

  // The minimum eating speed is found when the search space converges
  return right;
};

// Function to calculate the total hours required to eat all bananas at a given eating speed
const getHourSpent = (mid, piles, hourSpent = 0) => {
  // Iterate through each pile of bananas and calculate the total hours spent
  for (const pile of piles) {
    // Add the hours required to eat the current pile at the given eating speed
    hourSpent += Math.ceil(pile / mid);
  }

  // Return the total hours spent to eat all bananas at the given eating speed
  return hourSpent;
};
