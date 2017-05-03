// Constructor to place the set in a default minimum context, and give it a native feel
class SetAVLTree {
  constructor (array = []) {
    this.tree = null
    array.forEach(el => {
      this.tree = insert(el, this.tree)
    })
  }

  insert (el) {
    this.tree = insert(el, this.tree)
  }

  map (fn) {
    map(this.tree, fn)
  }
}

// Functional helpers

// Rotate left
function rotl (set) {
  if (!set.right) {
    return set
  }
  const pivot = set.right
  const lessThans = set.left
  const betweens = set.right.left
  const greaterThans = set.right.right
  return tree(pivot, tree(set, lessThans, betweens), greaterThans)
}

// Rotate right
function rotr (set) {
  if (!set.left) {
    return
  }
  const pivot = set.left
  const lessThans = set.left.left
  const betweens = set.left.right
  const greaterThans = set.right
  return tree(pivot, lessThans, tree(set, betweens, greaterThans))
}

// Tree constructor
function tree (head, left, right) {
  return Object.assign({}, head, {
    height: Math.max(height(left), height(right)) + 1,
    left,
    right
  })
}

// Return the height of a tree
function height (set) {
  return set ? set.height : 0
}

// Return the height difference
function diff (set) {
  if (!set) {
    return 0
  }
  return height(set.right) - height(set.left)
}

// Balance the tree
function balance (set) {
  if (!set) {
    return set
  }
  if (diff(set) === -2 && diff(set.left) === 1) {
    return rotr(tree(set, rotl(set.left), set.right))
  }
  if (diff(set) < -1) {
    return rotr(set)
  }
  if (diff(set) === 2 && diff(set.right) === -1) {
    return rotl(tree(set, set.left, rotr(set.right)))
  }
  if (diff(set) > 1) {
    return rotl(set)
  }
  return set
}

// Insert an element
function insert (element, set) {
  if (!set) {
    return {
      value: element,
      height: 1,
      left: null,
      right: null
    }
  }
  if (element === set.value) {
    return set
  }
  if (element < set.value) {
    return balance(tree(set, insert(element, set.left), set.right))
  }
  if (element > set.value) {
    return balance(tree(set, set.left, insert(element, set.right)))
  }
}

function map (set, fn) {
  if (!set) {
    return
  }
  fn(set.value)
  map(set.left, fn)
  map(set.right, fn)
}

// Test client
let set = new SetAVLTree([1, 2, 3])

set.map(console.log.bind(console))
