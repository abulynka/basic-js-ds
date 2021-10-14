/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let head = l;
  while (head.value === k) {
    if (head.next === null) {
      return null;
    }
    head = head.next;
  }

  let lastNode = l;
  let currentNode = l.next;

  while (currentNode !== null) {
    if (currentNode.value === k) {
      lastNode.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      lastNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return head;
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}
