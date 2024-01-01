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
    let temp = current.next;
    current.next = prev;
    prev = current;
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
