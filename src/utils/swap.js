module.exports = (arr, i, j) => {
  const swap = arr[i]
  arr[i] = arr[j]
  arr[j] = swap
}
