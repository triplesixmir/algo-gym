/**
 * Majority Element
 * LeetCode #169
 *
 * @param {number[]} nums
 * @returns {number}
 */
export function majorityElement(nums) {
  let cand = null, count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) { cand = nums[i]; count++; }
    else if (cand === nums[i]) count++;
    else if (cand !== nums[i]) count--;
  }

  return cand;
}
