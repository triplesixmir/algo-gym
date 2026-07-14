/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Reverse Linked List
 * LeetCode #206
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
export function reverseList(head) {
  let node = null;

  while (head) {
    const next = head.next;
    head.next = node;
    node = head;
    head = next;
  }

  return node;
}
