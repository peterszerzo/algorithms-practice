const POSITIVE_INFINITY = 10000

/**
 * Bellman-Ford algorithm to calculate shortest paths in a directed, edge-weighted graph
 * @param {Array} vertices - List of strings identifying vertices
 * @param {Array} graph - List of edges with to, from and cost fields
 * @param {Array} memo - Intermediate path cost array, not supplied by the test client.
 */
function bellmanFord (vertices, graph, memoInput) {
  const memo = memoInput || vertices.reduce((acc, current) => Object.assign({}, acc, {
    [current]: current === vertices[0] ? 0 : POSITIVE_INFINITY
  }), {})
  let shouldRunAgain = false
  vertices.forEach(vertex => {
    if (memo[vertex] === POSITIVE_INFINITY) {
      return
    }
    const outgoingEdges = graph.filter(({from}) => from === vertex)
    outgoingEdges.forEach(({to, cost}) => {
      const newCost = memo[vertex] + cost
      if (memo[to] > newCost) {
        shouldRunAgain = true
        memo[to] = newCost
      }
    })
  })
  if (!shouldRunAgain) {
    return memo
  }
  return bellmanFord(vertices, graph, memo)
}

// Test client

const vertices = ['S', 'A', 'B', 'C', 'D', 'E']

const graph = [
  {from: 'S', to: 'A', cost: 4},
  {from: 'S', to: 'E', cost: -5},
  {from: 'A', to: 'C', cost: 6},
  {from: 'B', to: 'A', cost: 3},
  {from: 'C', to: 'B', cost: -2},
  {from: 'D', to: 'C', cost: 3},
  {from: 'D', to: 'A', cost: 10},
  {from: 'E', to: 'D', cost: 8}
]

console.log(bellmanFord(vertices, graph))
