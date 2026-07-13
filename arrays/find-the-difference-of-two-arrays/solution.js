/**
 * Find The Difference Of Two Arrays
 * LeetCode #2215
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[][]}
 */
export function findDifference(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [
    Array.from(set1.difference(set2)),
    Array.from(set2.difference(set1))
  ];
}
