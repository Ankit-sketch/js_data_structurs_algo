Note :

Always remember that there is only two way to store data in the memory.

a> Sequential. b> Non - sequential

Graph is a Non - sequential way of storing data in the memory.

Now, the question is that okay, it is a Non - sequential way but like Tree or Array it is not defined like we can make a class and try to implement.

In this there are nodes which may or may not be connected.

So, for this just remember that some one will give you data and you need to store this data.

You can store the data in a 2D Matrix or Adjacency List.

Let's say you are saying that there is value 2 which is connected to 5.(Directed graph)

So, here we will day 2 is a node and 5 is also a node.

2 -> 5

Now Let's say you are saying that there is value 2 which is connected to 5 and 5 is also connected to 2.(Undirected graph)

2 - 5

Lets say someone gives you data in an array, and said that make a undirected graph out of it. So how will he gives you data? Obviously, in a an array or may be anything elese but array seems to be a great option.

let edges = [[0, 1], [0, 2], [1, 2]], (edges are like arrow -> and vertex are actual nodes.)
[0, 1] => saying that there is a edge from 0 to 1 and also from 1 to 0;

So, Adjacency list is a great way to m=implement most of the questions and also the further questions are mostly asked as a adjacency list so, i will also make the Adjacency list.

Also, mostly all the solution of a graph problem will have a visited array.

Also always remember that when we need to do a BFS traversal whether in Tree or Graphs we will have to take help of external Data structure Stack

Also always remember that when we need to do a DFS traversal whether in Tree or Graphs we will have to mostly use Recursion.
