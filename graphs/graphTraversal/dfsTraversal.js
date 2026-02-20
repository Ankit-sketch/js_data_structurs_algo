let adj = [[2, 3, 1], [0], [0, 4], [0], [2]];
/*
 * Output: [0, 2, 4, 3, 1]
Explanation: Starting from 0, the DFS traversal proceeds as follows:
Visit 0 → Output: 0 
Visit 2 (the first neighbor of 0) → Output: 0, 2 
Visit 4 (the first neighbor of 2) → Output: 0, 2, 4 
Backtrack to 2, then backtrack to 0, and visit 3 → Output: 0, 2, 4, 3 
Finally, backtrack to 0 and visit 1 → Final Output: 0, 2, 4, 3, 1
 */

/* 
notice here that adj list is already given, sometimes the array is given then we need to convert it to adj list and only after that we will implement our logic to the graph
*/

function dfsTraversal(adjList) {
  let visited = [];
  let answer = [];
  getDfs(0, answer, visited, adjList);
  return answer;
}
function getDfs(node, answer, visited, adjList) {
  visited[node] = true;
  answer.push(node);
  let neighbourArr = adjList[node];
  for (let i = 0; i < neighbourArr.length; i++) {
    let currentElement = neighbourArr[i];
    if (!visited[currentElement])
      getDfs(currentElement, answer, visited, adjList);
  }
}
console.log(dfsTraversal(adj));
