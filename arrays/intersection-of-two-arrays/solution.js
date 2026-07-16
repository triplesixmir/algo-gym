/**
 * Intersection Of Two Arrays
 * LeetCode #349
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function intersection(nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const r = [];

  for (let e of s1) {
    if (s2.has(e)) {
      r.push(e);
    }
  }

  return r;
}
