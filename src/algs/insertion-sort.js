const swap = require('../utils/swap')

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    for (let j = i; j > 0 && arr[j - 1] > temp; j--) {
      swap(arr, j, j - 1)
    }
  }
}

function insertionSortAsync (arr, next) {
  const dummyTimestep = 0;
  function innerLoop (j, i, temp, next) {
    if (!(j > 0 && arr[j - 1] > temp)) {
      return next()
    }
    setTimeout(() => {
      swap(arr, j, j - 1)
      innerLoop(j - 1, i, temp, next)
    }, dummyTimestep)
  }

  function outerLoop (i, next) {
    if (i === arr.length) {
      return next()
    }
    let temp = arr[i]
    innerLoop(i, i, temp, () => {
      setTimeout(() => {
        outerLoop(i + 1, next)
      }, dummyTimestep)
    })
  }

  setTimeout(() => {
    outerLoop(1, () => {
      next(arr)
    })
  }, dummyTimestep)
}

module.exports = {
  sync: insertionSort,
  async: insertionSortAsync
}
