// Breadth first search, searches by level like a horizontal search line by line
// BFS does not preserve the shape
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<number> | null)[] = [head];
  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null;
    if (!curr) {
      continue;
    }
    if (curr.value === needle) {
      return true;
    }
    q.push(curr.left);
    q.push(curr.right);
  }
  return false;
}

// Recursive BFS

/*
function BreadthFirstSearchR(
  queue: (BinaryNode<number> | null)[],
  list: number[],
) {
  if (!queue.length) {
    return list;
  }
  const currentNode = queue.shift() as BinaryNode<number> | undefined | null;
  list.push(currentNode.value);

  if (currentNode.left) {
    queue.push(currentNode.left);
  }
  if (currentNode.right) {
    queue.push(currentNode.right);
  }

  return this.BreadthFirstSearchR(queue, list);
}
*/
