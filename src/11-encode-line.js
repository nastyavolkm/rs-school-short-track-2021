/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const output = [];
  let n = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      n += 1;
    } else if (n === 1) {
      output.push(arr[i]);
      n = 1;
    } else if (n > 1) {
      output.push(`${n}${arr[i]}`);
      n = 1;
    }
  }
  return output.join('');
}

module.exports = encodeLine;
