const removeNthFromEnd = (head, n) => {
  const traverseToIndex = (n) => {
    let counter = 0;
    let currentNode = head;
    while (counter !== n) {
      currentNode = currentNode.next;
      counter++;
    }
    currentNode;
  };

  let temp = currentNode.next;
  currentNode.next = currentNode.prev;
  currentNode.prev = currentNode;
  currentNode = null;
  return head;
};
