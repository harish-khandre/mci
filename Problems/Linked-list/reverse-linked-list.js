const reverseList = (head) => {
  let prev = null;
  while (head !== null) {
    const temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
};
