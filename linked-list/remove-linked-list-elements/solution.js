/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Remove Linked List Elements
 * LeetCode #203
 *
 * @param {ListNode} head
 * @param {number} val
 * @returns {ListNode}
 */
export function removeElements(head, val) {
  let res = new ListNode(0, head);
  let dummy = res;

  while (dummy) {
    while (dummy.next && dummy.next.val === val) {
      dummy.next = dummy.next.next;
    }

    dummy = dummy.next;
  }

  return res.next;
}
