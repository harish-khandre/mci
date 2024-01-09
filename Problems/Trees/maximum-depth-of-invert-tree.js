const maxDepth = (root) => {
  if (!root) return 0;
  const right = maxDepth(root.right);
  const left = maxDepth(root.left);
  return Math.max(left, right) + 1;
};
