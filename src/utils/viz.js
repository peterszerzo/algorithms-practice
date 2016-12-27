// Draft
function sortVisualizer () {
  // Example state
  let state = {
    arr: [1, 2, 3],
    cursors: {
      i: 0,
      j: 2
    }
  }

  function render () {
    // TBD
  }

  return {
    setState: (stateChange) => {
      state = Object.assign({}, state, stateChange)
      render()
    }
  }
}

module.exports = {
  sortVisualizer: sortVisualizer
}
