/**
 * Find The Index Of The First Occurrence In A String
 * LeetCode #28
 *
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */
export function strStr(haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;

    while (j < needle.length && needle[j] === haystack[i + j]) {
      j++;
    }

    if (j === needle.length) return i;
  }

  return -1;
}
