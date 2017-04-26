function conventional(n) {
  const primes = []
  const arr = []
  for (let i = 0; i < n; i += 1) {
    arr.push({
      marked: false
    })
  }
  const limit = Math.sqrt(n)
  for (let i = 2; i < n; i += 1) {
    if (!arr[i].marked) {
      primes.push(i)
    }
    if (i < limit) {
      for (let x = i; x < n; x += i) {
        arr[x].marked = true
      }
    }
  }
  return primes
}

function recurseInto(list, fn) {
  const head = list.length > 0 ? list[0] : null
  const tail = list.length > 0 ? list.slice(1, list.length) : null
  if (head) {
    fn(head)
  }
  if (tail) {
    recurseInto(tail, fn)
  }
}

function recursive(n) {
  const list = []
  for (let i = 2; i <= n; i += 1) {
    list[i] = {
      index: i,
      value: true
    }
  }
  const limit = Math.sqrt(n)
  for (let i = 2; i <= limit; i += 1) {
    recurseInto(list, (val) => {
      if (val.index > i && val.value) {
        if (val.index % i === 0) {
          val.value = false
        }
      }
    })
  }
  return list.filter(({value}) => value).map(({index}) => index)
}

console.log(recursive(100))
