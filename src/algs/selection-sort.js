const swap = require('../utils/swap')

function selectionSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i + 1
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
}

module.exports = {
  sync: selectionSort
}
