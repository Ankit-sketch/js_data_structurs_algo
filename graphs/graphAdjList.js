/*
let edges = [
  [0, 1],
  [0, 2],
  [1, 2],
];
output [ [ 1, 2 ], [ 0, 2 ], [ 0, 1 ] ]
0 -> 1, 2
1 -> 0, 2
2 -> 0, 1

[[2, 3, 1], [0], [0, 4], [0], [2]] => this is another example of list for reference nor related to this question but yeah for the sake of understanding that this is a list also 
*/

let edges = [
  [0, 1],
  [0, 2],
  [1, 2],
];

let V = 3;

function buildAdjList(edges, vertex) {
  let adjList = [];
  for (let i = 0; i < vertex; i++) {
    adjList.push([]);
  }
  for (let j = 0; j < edges.length; j++) {
    let u = edges[j][0];
    let v = edges[j][1];
    adjList[u].push(v);
    adjList[v].push(u);
  }
  return adjList;
}

console.log(buildAdjList(edges, V));
