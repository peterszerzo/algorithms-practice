const POSITIVE_INFINITY = 10000

/**
 * Bellman-Ford algorithm to calculate shortest paths in a directed, edge-weighted graph
 * @param {Array} vertices - List of strings identifying vertices
 * @param {Array} graph - List of edges with to, from and cost fields
 * @param {Array} memo - Intermediate path cost array, not supplied by the test client.
 */
function dijkstra(vertices, graph) {
  const memo = vertices.reduce((acc, current) => Object.assign({}, acc, {
    [current]: {
      cost: current === vertices[0] ? 0 : POSITIVE_INFINITY,
      isVisited: false
    }
  }), {})
  function getNewVisitedVertex() {
    return Object.keys(memo).filter(key => !memo[key].isVisited).sort((a, b) => {
      memo[a].cost - memo[b].cost
    })[0]
  }
  let visitedVertex = getNewVisitedVertex()
  while (visitedVertex) {
    const outgoingEdges = graph.filter(({from, to}) => from === visitedVertex)
    outgoingEdges.forEach(({to, cost}) => {
      const newCost = memo[visitedVertex].cost + cost
      if (newCost < memo[to].cost) {
        memo[to].cost = newCost
      }
    })
    memo[visitedVertex].isVisited = true
    visitedVertex = getNewVisitedVertex()
  }
  return memo
}

// Test client

const vertices = ['S', 'A', 'B', 'C', 'D', 'E']

const graph = [
  {from: 'S', to: 'A', cost: 4},
  {from: 'S', to: 'E', cost: 2},
  {from: 'A', to: 'C', cost: 6},
  {from: 'B', to: 'A', cost: 3},
  {from: 'C', to: 'B', cost: 5},
  {from: 'D', to: 'C', cost: 3},
  {from: 'D', to: 'A', cost: 10},
  {from: 'E', to: 'D', cost: 8}
]

console.log(dijkstra(vertices, graph))
