const reverseList = (head) => {
  let prev = null;
  while (head !== null) {
    // let link = a-b-c-d
    // stroing the value of b
    const temp = head.next;
    // pointing a to null instead of b
    head.next = prev;
    // b is head/current now
    prev = head;
    // b is temp now and loop continues
    head = temp;
  }
  return prev;
};
