/**
 * Remove Element
 * LeetCode #27
 *
 * @param {number[]} nums
 * @param {number} val
 * @returns {number}
 */
export function removeElement(nums, val) {
  let slow = 0;

  for (let fast = slow; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
}
