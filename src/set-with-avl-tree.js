// Rotate left
function rotl (tree) {
  if (!tree.right) {
    return tree
  }
  const pivot = tree.right
  const lessThans = tree.left
  const betweens = tree.right.left
  const greaterThans = tree.right.right
  return Object.assign({}, pivot, {
    left: Object.assign({}, tree, {
      left: lessThans,
      right: betweens
    }),
    right: greaterThans
  })
}

// Rotate right
function rotr (tree) {
  if (!tree.left) {
    return
  }
  const pivot = tree.left
  const lessThans = tree.left.left
  const betweens = tree.left.right
  const greaterThans = tree.right
  return Object.assign({}, pivot, {
    left: lessThans,
    right: Object.assign({}, tree, {
      left: betweens,
      right: greaterThans
    })
  })
}

function insert (element, tree) {
  if (!tree) {
    return {
      value: element,
      height: 1,
      left: null,
      right: null
    }
  }
  if (element === tree.value) {
    return tree
  }
  if (element < tree.value) {
    const left = insert(element, tree.left)
    const right = tree.right
    return Object.assign({}, tree, {
      height: Math.max(left ? left.height : 0, right ? right.height : 0) + 1,
      left
    })
  }
  if (element > tree.value) {
    const left = tree.left
    const right = insert(element, tree.right)
    return Object.assign({}, tree, {
      height: Math.max(left ? left.height : 0, right ? right.height : 0) + 1,
      right
    })
  }
}

// Test client
let tree = null

tree = insert(3, tree)
tree = insert(2, tree)
tree = insert(1, tree)

console.log(rotr(tree))
