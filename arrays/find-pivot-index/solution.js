/**
 * Find Pivot Index
 * LeetCode #724
 *
 * @param {number[]} nums
 * @returns {number}
 */
export function pivotIndex(nums) {
  let total = nums.reduce((acc, number) => acc + number, 0);
  let leftTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightTotal = total - leftTotal - nums[i];

    if (leftTotal === rightTotal) return i;

    leftTotal += nums[i];
  }

  return -1;
}
