const graph = {
  a: ['b', 'c'],
  b: ['e'],
  c: ['d', 'f'],
  d: ['e'],
  e: ['g'],
  f: ['e'],
  g: [],
};

function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return visited;
}

function findBfs(graph, start, end) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();

    for (let neighbor of graph[node]) {
      if (neighbor === end) {
        return true;
      }
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return visited;
}
// console.log(bfs(graph, 'a'));
console.log(findBfs(graph, 'a', 'g'));

function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);

      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return visited;
}

function dfsRecursion(graph, start, visited = new Set()) {
  if (visited.has(start)) return;

  visited.add(start);

  for (const neighbor of graph[start]) {
    dfsRecursion(graph, neighbor, visited);
  }
}

console.log(dfsIterative(graph, 'a'));
console.log(dfsRecursion(graph, 'a'));
