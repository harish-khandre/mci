function isValidBST(root) {
  // Helper function to check if the tree is a valid BST
  const check = (node, min, max) => {
    // Base case: an empty tree is a valid BST
    if (!node) {
      return true;
    }
    // Check if the current node's value is within the valid range
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false;
    }
    // Recursively check the left and right subtrees
    return check(node.left, min, node.val) && check(node.right, node.val, max);
  };
  // Start the recursion with an initial valid range of (-Infinity, Infinity)
  return check(root, null, null);
}
// we don't care of min in left case and max in right case
