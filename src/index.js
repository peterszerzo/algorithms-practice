// Test client
const insert = require('./algs/insertion-sort')

const arr = [1, 3, 0, -8, 1, 2, 10]
insert.async(arr, console.log.bind(console))
