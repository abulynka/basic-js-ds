const { ListNode } = require('../extensions/list-node.js');

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
module.exports = class Queue {
  constructor() {
    this._head = null;
    this._queue = null;
  }

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    if (this._queue === null) {
     this._head = new ListNode(value);
     this._queue = this._head;
    } else {
      this._queue.next = new ListNode(value);
      this._queue = this._queue.next;
    }
  }

  dequeue() {
    let result = null;

    if (this._head !== null) {
      result = this._head.value;
      this._head = this._head.next;
      if (this._head === null) {
        this._queue = null;
      }
    }

    return result;
  }
}
