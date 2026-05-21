const graph = {
  a: { b: 3, c: 1 },
  b: { e: 6 },
  c: { d: 2, f: 9 },
  d: { e: 3 },
  e: { g: 4 },
  f: { e: 12 },
  g: {},
};

function dijkstra(graph, startVertex) {
  const distances = {};
  const visited = new Set();
  const prev = {};

  for (const vertex in graph) {
    distances[vertex] = Infinity;
    prev[vertex] = null;
  }

  distances[startVertex] = 0;

  while (visited.size < Object.keys(graph).length) {
    let closesVertex = null;
    let smallestDist = Infinity;

    for (const vetrex in distances) {
      if (!visited.has(vetrex) && distances[vetrex] < smallestDist) {
        smallestDist = distances[vetrex];
        closesVertex = vetrex;
      }
    }

    if (closesVertex === null) break;

    visited.add(closesVertex);

    for (const neighbor in graph[closesVertex]) {
      const weight = graph[closesVertex][neighbor];
      const newWeight = distances[closesVertex] + weight;

      if (newWeight < distances[neighbor]) {
        distances[neighbor] = newWeight;
        prev[neighbor] = closesVertex;
      }
    }
  }

  return { distances, prev };
}

console.log(dijkstra(graph, 'a'));
