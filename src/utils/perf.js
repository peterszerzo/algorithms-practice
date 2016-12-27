function testSort (sort, sampleSize, next) {
  const arr = []
  for (let i = 0; i < sampleSize; i++) {
    arr.push(Math.random())
  }
  const time1 = new Date().getTime()
  sort(arr)
  const time2 = new Date().getTime()
  next(time2 - time1)
}

module.exports = {
  testSort: testSort
}
