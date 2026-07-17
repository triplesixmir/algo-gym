/**
 * Valid Anagram
 * LeetCode #242
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
export function isAnagram(s, t) {
  const sMap = new Map();
  const tMap = new Map();

  for (const char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }

  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  if (tMap.size !== sMap.size) return false;

  for (const [key, value] of sMap) {
    if (value !== tMap.get(key)) return false;
  }

  return true;
}
