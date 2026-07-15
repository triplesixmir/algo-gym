/**
 * Pascal's Triangle II
 * LeetCode #119
 *
 * @param {number} rowIndex
 * @returns {number[]}
 */
export function getRow(rowIndex) {
  let res = [1];

  for (let i = 0; i < rowIndex; i++) {
    res = res.map((val, index) => (res[index - 1] || 0) + (res[index] || 0));
    res.push(1);
  }

  return res;
}
