function mergeSort (array) {
  if (array.length < 2) {
    return array
  }

  // Split in half
  const half = Math.floor(array.length / 2)
  const left = array.slice(0, half)
  const right = array.slice(half, array.length)

  // Sort halves recursively
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  // Merge
  const mergedArray = []
  let i = 0
  let j = 0
  const sortedLeftLength = sortedLeft.length
  const sortedRightLength = sortedRight.length
  while (i < sortedLeftLength || j < sortedRightLength) {
    if (sortedLeft[i] < sortedRight[j] || j >= sortedRightLength) {
      mergedArray.push(sortedLeft[i])
      i += 1
    } else if (sortedLeft[i] > sortedRight[j] || i >= sortedLeftLength) {
      mergedArray.push(sortedRight[j])
      j += 1
    }
  }

  return mergedArray
}

// Test client
console.log(mergeSort([1, 2, 3, 0, 9, -1]))
