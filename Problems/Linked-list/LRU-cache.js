class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.doublyLinkedList = new DoublyLinkedList();
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    // Update the order to mark it as most recently used
    const node = this.map.get(key);
    this.doublyLinkedList.moveToFront(node);

    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      // If key exists, update the value and move the node to the front
      const node = this.map.get(key);
      node.value = value;
      this.doublyLinkedList.moveToFront(node);
    } else {
      // If the map is at full capacity, remove the least recently used node
      if (this.map.size >= this.capacity) {
        const lruNode = this.doublyLinkedList.popBack();
        this.map.delete(lruNode.key);
      }

      // Add the new key-value pair and the corresponding node to the map and doublyLinkedList
      const newNode = this.doublyLinkedList.addToFront(key, value);
      this.map.set(key, newNode);
    }
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToFront(key, value) {
    const newNode = new Node(key, value);
    newNode.next = this.head.next;
    newNode.prev = this.head;
    this.head.next.prev = newNode;
    this.head.next = newNode;
    return newNode;
  }

  moveToFront(node) {
    // Remove the node from its current position
    node.prev.next = node.next;
    node.next.prev = node.prev;

    // Move the node to the front
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  popBack() {
    // Remove the last node (least recently used) and return it
    const lruNode = this.tail.prev;
    lruNode.prev.next = this.tail;
    this.tail.prev = lruNode.prev;
    return lruNode;
  }
}
