// Define a simple Node class representing a node in the linked list
class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
/**
 * Function to detect a cycle in a linked list using the Tortoise and Hare algorithm.
 * @param head The head of the linked list.
 * @returns True if a cycle is detected, false otherwise.
 */
function hasCycle(head: ListNode | null): boolean {
  // Initialize the tortoise and hare pointers
  let tortoise = head;
  let hare = head;

  // Iterate until the hare reaches the end of the list or a cycle is detected
  while (hare !== null && hare.next !== null) {
    // Move the tortoise one step
    tortoise = tortoise?.next;

    // Move the hare two steps
    hare = hare.next.next;

    // If the tortoise and hare meet, there is a cycle
    if (tortoise === hare) {
      return true;
    }
  }

  // If the hare reaches the end of the list, there is no cycle
  return false;
}

// Example usage:
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node1; // Creating a cycle

const hasCycleResult = hasCycle(node1);
console.log(`Linked list has cycle: ${hasCycleResult}`);
