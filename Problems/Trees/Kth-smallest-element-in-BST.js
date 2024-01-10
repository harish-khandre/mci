const kthSmallest = (root, k) => {
  // Array to store the elements during in-order traversal
  const result = [];

  // In-order traversal function
  const inOrderTraversal = (node) => {
    // Base case: stop the traversal if the node is null
    if (node === null) return;

    // Traverse the left subtree
    inOrderTraversal(node.left);

    // Visit the current node and append its value to the result array
    result.push(node.val);

    // Traverse the right subtree
    inOrderTraversal(node.right);
  };

  // Perform in-order traversal starting from the root inOrderTraversal(root);
  // Return the Kth smallest element (adjusted for zero-indexing)
  return result[k - 1];
};
// here k is index of the smallest element that we need and node.left check every left node of the tree and its right node as well
