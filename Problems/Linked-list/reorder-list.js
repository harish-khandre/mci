const reorderList = (head) => {
  let fast = head;
  let slow = head;

  while (fast.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let current = slow.next;
  slow.next = null;

  let prev = null;

  while (current) {
    // let link = a-b-c-d
    // stroing the value of b
    let temp = current.next;
    // pointing a to null instead of b
    current.next = prev;
    // b is head/current now
    prev = current;
    // b is temp now and loop continues
    current = temp;
  }

  let h1 = head;
  let h2 = prev;

  while (h2) {
    let temp = h1.next;
    h1.next = h2;
    h1 = h2;
    h2 = temp;
  }
};
