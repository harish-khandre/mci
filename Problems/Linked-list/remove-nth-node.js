/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5] */

const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode(0);
  dummy.next = head;

  let left = dummy;
  let right = head;

  while (right && n > 0) {
    right = right.next;
    n--;
  }

  while (right) {
    // runs this loop till the right is reached the end of the list
    left = left.next;
    right = right.next;
  }
  // jumping two numbers to get nth point
  left.next = left.next.next;
  return dummy.next;
};
