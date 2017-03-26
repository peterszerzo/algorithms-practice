function swap (arr, i, j) {
  const swap = arr[i]
  arr[i] = arr[j]
  arr[j] = swap
}

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

module.exports = selectionSort
