const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tall = null;
    this.size = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.size === 0) {
      this.head = this.tall = newNode;
    } else {
      this.tall.next = newNode;
      this.tall = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      return "Queue is empty";
    }
    const removedValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) {
      this.tall = null;
    }
    return removedValue;
  }
}

module.exports = {
  Queue,
};
