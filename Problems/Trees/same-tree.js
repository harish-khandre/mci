function isSameTree(p, q) {
  // Handle null cases explicitly for clarity and potential edge cases:
  if (p === null && q === null) {
    return true; // Both trees are empty
  }
  if (p === null || q === null) {
    return false; // One tree is empty, but not the other
  }

  // Compare values and recursively check subtrees:
  if (p.val !== q.val) {
    return false; // Values don't match
  }

  // Use logical AND (&&) to short-circuit evaluation:
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
