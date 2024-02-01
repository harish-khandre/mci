function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) return false;

  if (curr.value === needle) return true;

  if (curr.value < needle) {
    return search(curr.right, needle);
  }

  return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}

// dfs with pre post and inorder

/*
function DFSInOrder() {
        return traverseInOrder(this.root, []);
    }
    DFSPostOrder() {
        return traversePostOrder(this.root, []);
    }
    DFSPreOrder() {
        return traversePreOrder(this.root, []);
    }


function traverseInOrder(node, list) {
    console.log(node.value);
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    console.log(node.value);
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }

    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    console.log(node.value);
    if (node.left) {
        traversePostOrder(node.left, list);
    }

    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}
*/
