/**
 * Contains Duplicate
 * LeetCode #217
 *
 * @param {number[]} nums
 * @returns {boolean}
 */
export function containsDuplicate(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) set.add(nums[i]);
    else return true;
  }

  return false;
}
