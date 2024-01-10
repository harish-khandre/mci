const isSubtree = (root, subRoot) => {
  if (root === null && subRoot === null) return true;
  if (root == null || subRoot == null) return false;

  if (!isSameTree(root, subRoot)) {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
  return true;
};

const isSameTree = (p, q) => {
  if (p === null && q === null) return true;
  if (p == null || q == null) return false;

  if (p.val === q.val)
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

  return false;
};
