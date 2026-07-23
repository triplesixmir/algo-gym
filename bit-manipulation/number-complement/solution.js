/**
 * Number Complement
 * LeetCode #476
 *
 * @param {number} num
 * @returns {number}
 */
export function findComplement(num) {
  let ans = [];
  const arr = num.toString(2).split("");

  for (const e of arr) {
    if (e === '1') { ans.push(0); } else { ans.push(1); }
  }

  return parseInt(ans.join(""), 2);
}
