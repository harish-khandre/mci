// Define a function named rob which takes an array of integers nums as input
const rob = (nums) => {
  // If there is only one house, return the value of that house
  if (nums.length === 1) return nums[0];
  // If there are only two houses, return the maximum value of the two houses
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // Create two arrays to store the maximum value robbed up to a certain house
  let dp1 = new Array(nums.length);
  let dp2 = new Array(nums.length);

  // Helper function to calculate the maximum value robbed if starting from house i and ending at house numsLen
  robTwice(0, nums.length - 2, dp1, nums);
  robTwice(1, nums.length - 1, dp2, nums);

  // Helper function to calculate the maximum value robbed if starting from house i and ending at house numsLen
  function robTwice(i, numsLen, dp, nums) {
    // Initialize the first two values of the dp array
    dp[i] = nums[i];
    dp[i + 1] = Math.max(nums[i], nums[i + 1]);

    // Iterate from the third house to the last house
    for (let j = i + 2; j <= numsLen; j++) {
      // Calculate the maximum value robbed up to the current house
      dp[j] = Math.max(dp[j - 1], dp[j - 2] + nums[j]);
    }
  }
  // Return the maximum value robbed, considering two possible starting points
  return Math.max(dp1[nums.length - 2], dp2[nums.length - 1]);
};

//////////////////////////////////////////////////
// OR
//////////////////////////////////////////////////

// Function to determine the maximum amount of money that can be robbed without robbing adjacent houses
var _rob = function (nums) {
  // Return the maximum amount among three scenarios:
  return Math.max(
    // Robbing the first house and recursively calling houseRobber on the rest of the houses
    nums[0],
    // Robbing all houses except the first one
    houseRobber(nums.slice(1)),
    // Robbing all houses except the last one
    houseRobber(nums.slice(0, nums.length - 1)),
  );
};
// Function to calculate the maximum amount of money that can be robbed from a list of houses
const houseRobber = (houses) => {
  // Initialize variables to keep track of the maximum amount of money robbed without robbing adjacent houses
  let rob1 = 0; // Maximum amount robbed up to the previous house
  let rob2 = 0; // Maximum amount robbed up to the current house

  // Iterate through each house
  for (let house of houses) {
    // Calculate the maximum amount that can be robbed considering the current house
    let temp = Math.max(rob2, rob1 + house); // Choose between robbing the current house or not
    rob1 = rob2; // Update rob1 to hold the previous rob2 value for the next iteration
    rob2 = temp; // Update rob2 to hold the maximum amount robbed up to the current house
  }
  // Return the maximum amount of money that can be robbed without robbing adjacent houses
  return rob2;
};
