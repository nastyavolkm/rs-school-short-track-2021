/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = [];
  let arrSorted = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr1.push(i);
    }
  }
  for (let i = 0; i < arrSorted.length; i++) {
    if (arrSorted[i] === -1) {
      arrSorted.splice(i, 1);
      i -= 1;
    }
  }
  arrSorted = arrSorted.sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    arrSorted.splice(arr1[i], 0, -1);
  }
  return arrSorted;
}

module.exports = sortByHeight;
