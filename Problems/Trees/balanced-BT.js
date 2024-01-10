const isBalanced = (root) => {
  if (!root) return 1;
  const hl = isBalanced(root.left);
  const hr = isBalanced(root.right);
  if (hr === false || hl === false) return false;
  if (Math.abs(hr - hl) > 1) return false;
  return Math.max(hr, hl) + 1;
};
