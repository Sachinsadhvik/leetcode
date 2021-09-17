/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {  // n nodes, 0 to n-1
  let parents = [...Array(n).keys()];           // initially all nodes point to self, ie [0, 1, 2, ...]
  let connected = n;                            // initially all nodes are unconnected
  let redundant = 0;
​
  function find(id) {
    if(parents[id] !== id) 
      parents[id] = find(parents[id]); // compress 
    return parents[id];
  }
  
  function union(a, b) {
    let [rootA, rootB] = [find(a), find(b)];
    if(rootA !== rootB) {
      parents[rootB] = rootA;
      connected--;
    } else { // already connected, ie redundant
      redundant++;
    }
  }
    
  connections.forEach(con => union(...con));
  return (redundant >= connected - 1) ? connected - 1 : -1;
}
