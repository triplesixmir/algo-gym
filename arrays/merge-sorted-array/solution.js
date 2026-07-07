/**
 * Merge Sorted Array
 * LeetCode #88
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @returns {void} Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1, m, nums2, n) {
  let k = m + n - 1;
  let p1 = m - 1;
  let p2 = n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[k] = nums1[p1];
      p1--;
    } else {
      nums1[k] = nums2[p2];
      p2--;
    }
    k--;
  }

  while (p2 >= 0) {
    nums1[k] = nums2[p2];
    p2--;
    k--;
  }
}
