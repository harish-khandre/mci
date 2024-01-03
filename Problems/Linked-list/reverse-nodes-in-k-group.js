/* Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
You may not alter the values in the list's nodes, only nodes themselves may be changed.

Example: 
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5] */

const reverseKGroup = (head, k) => {
  // Count the number of ListNodes
  let n = 0;
  for (let i = head; i != null; n++, i = i.next);

  // Create a dummy LinkedList
  const dummy = new ListNode(0);
  dummy.next = head;

  // Loop through the nodes until we no longer have k or more remaining
  for (let prev = dummy, tail = head; n >= k; n -= k) {
    // Loop through this batch of nodes being reversed
    for (let i = 1; i < k; i++) {
      // Flip the nodes to point in the opposite direction (reverse them)
      const next = tail.next.next;
      tail.next.next = prev.next;
      prev.next = tail.next;
      tail.next = next;
    }

    // Swap the current head for the reversed one
    prev = tail;
    tail = tail.next;
  }
  return dummy.next;
};
