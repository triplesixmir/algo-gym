/**
 * Intersection Of Two Arrays II
 * LeetCode #350
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export function intersect(nums1, nums2) {
  const r = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0, k = 0;

  while (i < nums1.length && k < nums2.length) {
    if (nums1[i] < nums2[k]) i++;
    else if (nums1[i] > nums2[k]) k++;
    else {
      r.push(nums1[i]);
      i++;
      k++;
    }
  }

  return r;
}
