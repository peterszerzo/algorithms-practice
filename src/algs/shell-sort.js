function swap (arr, i, j) {
  const swap = arr[i]
  arr[i] = arr[j]
  arr[j] = swap
}

function shellSort (arr) {
  let h = 1
  while (h * 3 + 1 < arr.length) {
    h = h * 3 + 1
  }
  while (h > 0) {
    for (let i = h; i < arr.length; i++) {
      let temp = arr[i]
      for (let j = i; j >= h && arr[j - h] > temp; j -= h) {
        swap(arr, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
}

module.exports = shellSort
