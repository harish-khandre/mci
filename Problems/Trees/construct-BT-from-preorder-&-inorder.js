// Function to build a binary tree from preorder and inorder traversals
const buildTree = (preorder, inorder) => {
  // Create a map to store the indices of elements in inorder traversal
  const inorder_map = new Map();

  // Populate the inorder map
  for (let i = 0; i < inorder.length; i++) {
    inorder_map.set(inorder[i], i);
  }

  // Recursive helper function to build the tree
  build = (inorderStart, inorderEnd) => {
    // Base case: if the start index is greater than the end index, return null
    if (inorderStart > inorderEnd) {
      return null;
    }

    // Extract the value of the current root from the preorder array
    const root_val = preorder.shift();

    // Create a new TreeNode with the current root value
    const root = new TreeNode(root_val);

    // Find the index of the current root value in the inorder map
    const inorderIndex = inorder_map.get(root_val);

    // Recursively build the left subtree with elements to the left of the current root in inorder
    root.left = build(inorderStart, inorderIndex - 1);

    // Recursively build the right subtree with elements to the right of the current root in inorder
    root.right = build(inorderIndex + 1, inorderEnd);

    // Return the root of the current subtree
    return root;
  };

  // Start the recursive building process with the entire range of indices in inorder traversal
  return build(0, inorder.length - 1);
};
