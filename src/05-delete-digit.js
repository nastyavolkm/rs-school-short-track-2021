/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const arrMax = [];
  for (let i = 0; i < arr.length; i++) {
    const arr1 = arr.slice();
    arr1.splice(i, 1);
    const str = arr1.join('');
    arrMax.push(+str);
  }
  return arrMax.reduce((a, b) => {
    if (a > b) {
      return a;
    }
    return b;
  });
}

module.exports = deleteDigit;
