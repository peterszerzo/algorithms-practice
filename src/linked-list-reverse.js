// Constructor
function node (val, next) {
  return {
    val: val,
    next: next
  }
}

// Display as string
function toString (list) {
  if (!list.next) {
    return (list.val)
  }
  return (list.val + ' -> ' + toString(list.next))
}

// Convert to an array
function fromArray (arr) {
  if (arr.length === 0) {
    return
  }
  return node(arr[0], fromArray(arr.slice(1)))
}

// Reverse a linked list
function reverse (node) {
  if (!node || !node.next) {
    return node
  }
  let previousNode = node
  let currentNode = node.next
  node.next = undefined
  while (currentNode) {
    let nextNode = currentNode.next
    currentNode.next = previousNode
    previousNode = currentNode
    currentNode = nextNode
  }
  return previousNode
}

const s = toString(reverse(fromArray([1, 2, 3])))
console.log(s)
