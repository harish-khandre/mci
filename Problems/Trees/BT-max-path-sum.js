// Define a function maxPathSum with the root of a binary tree as the parameter
const maxPathSum = (root) => {
  // Initialize an array 'res' to store the result, and set its first element to the value of the root
  res = [root.val];

  // Define a recursive helper function dfs to traverse the tree and calculate the maximum path sum
  const dfs = (root) => {
    // Base case: If the current node is null, return 0
    if (!root) return 0;

    // Recursively calculate the maximum path sum for the left and right subtrees
    let leftMax = dfs(root.left);
    let rightMax = dfs(root.right);

    // Update leftMax and rightMax to be at least 0, as negative values would not contribute to the path sum
    leftMax = Math.max(leftMax, 0);
    rightMax = Math.max(rightMax, 0);

    // Update the result (res[0]) with the maximum path sum considering the current node
    res[0] = Math.max(res[0], root.val + leftMax + rightMax);

    // Return the maximum path sum considering the current node and one of its subtrees
    return root.val + Math.max(leftMax, rightMax);
  };

  // Call the dfs function with the root of the tree to start the traversal
  dfs(root);

  // Return the final result, which is stored in res[0]
  return res[0];
};
