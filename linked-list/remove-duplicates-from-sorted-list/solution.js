/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Remove Duplicates From Sorted List
 * LeetCode #83
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
export function deleteDuplicates(head) {
  let current = head;

  while (current != null && current.next != null) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}
