function swap (arr, i, j) {
  const swap = arr[i]
  arr[i] = arr[j]
  arr[j] = swap
}

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    for (let j = i; j > 0 && arr[j - 1] > temp; j--) {
      swap(arr, j, j - 1)
    }
  }
  return arr
}

module.exports = insertionSort
