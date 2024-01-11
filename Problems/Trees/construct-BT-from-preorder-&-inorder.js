const buildTree = (preorder, inorder) => {
  // Create a hash map for O(1) lookups of node positions in inorder
  inorder_map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorder_map.set(inorder[i], i);
  }

  // Recursive function to build the tree using indices
  build = (start, end) => {
    // Base case: no more nodes to process
    if (start > end) {
      return null;
    }

    // Create the root node using the first value in preorder
    const root_val = preorder.shift(); // Remove and return the first element
    const root = new TreeNode(root_val);

    // Find the index of the root node in inorder
    const i = inorder_map.get(root_val);

    // Recursively build the left and right subtrees using indices
    root.left = build(start, i - 1);
    root.right = build(i + 1, end);

    return root;
  };

  // Start building the tree from the entire inorder range
  return build(0, inorder.length - 1);
};
// setting values by looking for indexes in the indorder map for the preorder and by comparing them we can get index in the preorder and then by comparing the nodes we get valid positions to set it for the tree
