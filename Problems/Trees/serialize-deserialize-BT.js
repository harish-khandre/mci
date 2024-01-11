// Serialize the binary tree to a string
function serialize(root) {
  // Base case: if the current node is null, represent it as "#"
  if (!root) return "#";

  // Recursively serialize the left and right subtrees
  const leftSerialized = serialize(root.left);
  const rightSerialized = serialize(root.right);

  // Combine the current node's value with the serialized left and right subtrees
  return `${root.val},${leftSerialized},${rightSerialized}`;
}

// Deserialize the string to a binary tree
function deserialize(data) {
  // Split the string into an array of values
  const values = data.split(",");
  let index = 0;

  // Recursive function to build the tree
  function buildTree() {
    // Get the current value from the array
    const currentValue = values[index++];

    // Base case: if the current value is "#", return null
    if (currentValue === "#") {
      return null;
    }

    // Create a new node with the current value
    const newNode = new TreeNode(Number(currentValue));

    // Recursively build the left and right subtrees
    newNode.left = buildTree();
    newNode.right = buildTree();

    // Return the current node
    return newNode;
  }

  // Start building the tree from the root
  return buildTree();
}
