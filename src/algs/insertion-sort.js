const swap = require('../utils/swap')

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    for (let j = i; j > 0 && arr[j - 1] > temp; j--) {
      swap(arr, j, j - 1)
    }
  }
}

module.exports = insertionSort
