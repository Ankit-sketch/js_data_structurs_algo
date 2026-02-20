let adj = [[2, 3, 1], [0], [0, 4], [0], [2]];
/*
 * Output: [0, 2, 3, 1, 4]
Explanation: Starting from 0, the BFS traversal will follow these steps: 
Visit 0 → Output: 0 
Visit 2 (first neighbor of 0) → Output: 0, 2 
Visit 3 (next neighbor of 0) → Output: 0, 2, 3 
Visit 1 (next neighbor of 0) → Output: 0, 2, 3, 1
Visit 4 (neighbor of 2) → Final Output: 0, 2, 3, 1, 4
 */

/* 
notice here that adj list is already given, sometimes the array is given then we need to convert it to adj list and only after that we will implement our logic to the graph
*/

function bfsTraversal(adjList) {
  let visited = [];
  let queue = [];
  let answer = [];
  queue.push(0);
  while (queue.length != 0) {
    let currentelement = queue.shift(0, 1);
    visited[currentelement] = true;
    answer.push(currentelement);
    for (let i = 0; i < adjList[currentelement].length; i++) {
      let currentNeighbour = adjList[currentelement][i];
      if (!visited[currentNeighbour]) queue.push(currentNeighbour);
    }
  }
  return answer;
}
console.log(bfsTraversal(adj)); //[ 0, 2, 3, 1, 4 ]
