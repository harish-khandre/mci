var jump = function (nums) {
  // Initialize variables for number of jumps, the end of the current jump, and the farthest reachable position.
  let [jumps, currentJumpEnd, farthest] = [0, 0, 0];

  // Iterate through the array
  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest reachable position
    farthest = Math.max(farthest, i + nums[i]);

    // Check if the current position is the end of the current jump
    const canJump = i === currentJumpEnd;

    // If it is, increment the number of jumps and update the end of the current jump to the farthest reachable position
    if (canJump) {
      jumps++;
      currentJumpEnd = farthest;
    }
  }

  // Return the total number of jumps
  return jumps;
};
