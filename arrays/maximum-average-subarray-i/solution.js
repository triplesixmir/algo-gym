/**
 * Maximum Average Subarray I
 * LeetCode #643
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
export function findMaxAverage(nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) sum += nums[i];
  let maxSum = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];

    if (sum > maxSum) maxSum = sum;
  }

  return maxSum / k;
}
