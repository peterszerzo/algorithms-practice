/**
 * For an array A, find the non-empty, continuous subarray with the largest sum.
 */

/*
 * Notes:
 * For an array A, the maximum subarray lies either:
 * - entirely in the subarray A[low..mid]
 * - entirely in the subarray A[mid + 1..high]
 * - crossing the subarray A[i..j], where i <= mid and j > mid
 */

function maximumCrossingSubarray (a, low, mid, high) {
  var leftIndex = mid
  var leftMaxIndex
  var leftSum = -10000
  var sum = 0
  while (leftIndex >= low) {
    sum = sum + a[leftIndex]
    if (sum > leftSum) {
      leftMaxIndex = leftIndex
      leftSum = sum
    }
    leftIndex -= 1
  }

  var rightIndex = mid + 1
  var rightMaxIndex
  var rightSum = -10000
  sum = 0
  while (rightIndex <= high) {
    sum = sum + a[rightIndex]
    if (sum > rightSum) {
      rightMaxIndex = rightIndex
      rightSum = sum
    }
    rightIndex += 1
  }

  return {
    low: leftMaxIndex,
    high: rightMaxIndex,
    sum: leftSum + rightSum
  }
}

function maximumSubarray (a, low = 0, high = a.length - 1) {
  if (low === high) {
    return {
      low: low,
      high: high,
      sum: a[low]
    }
  }
  var mid = Math.floor((low + high) / 2)
  var leftMaximumSubarray = maximumSubarray(a, low, mid)
  var rightMaximumSubarray = maximumSubarray(a, mid + 1, high)
  var crossingSubarray = maximumCrossingSubarray(a, low, mid, high)
  return [
    leftMaximumSubarray,
    rightMaximumSubarray,
    crossingSubarray
  ].sort(function (a, b) {
    return a.sum - b.sum
  })[2]
}

// Test client
console.log(maximumSubarray([2, 2, -6, 3]))
