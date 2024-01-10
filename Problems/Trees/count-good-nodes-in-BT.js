const goodNodes = (root) => {
  let count = 0;

  const dfs = (node, max) => {
    if (node === null) return;

    if (node.val >= max) {
      max = node.val;
      count++;
    }

    dfs(node.left, max);
    dfs(node.right, max);
  };

  dfs(root, root.val);
  return count;
};

//better performance

const countGoodNodes = (root) => countGoodNodesHelper(root, -Infinity);

function countGoodNodesHelper(node, maxValueInPath) {
  // Base case: If the node is null, return 0
  if (node === null) {
    return 0;
  }
  // Check if the current node is a good node
  const isGoodNode = maxValueInPath <= node.val;

  // Update the maximum value in the path
  const newMaxValue = Math.max(maxValueInPath, node.val);

  // Recursively count good nodes in the left and right subtrees and return the no. of good nodes
  return (
    (isGoodNode ? 1 : 0) +
    goodNodesHelper(node.left, newMaxValue) +
    goodNodesHelper(node.right, newMaxValue)
  );
}
