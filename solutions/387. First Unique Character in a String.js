/**
 * @param {string} s
 * @return {number}
 */
​
  var firstUniqChar = function(s) {
    var all={};
    s.split("").map((x)=>{ all[x]= all[x]+1 || 1; })
    for(let i=0;i<s.length;i++){
      if(all[s[i]]==1){
       return i;
      }
} 
   return -1; }
// var firstUniqChar = function(s) {
//     for( let i=0; i<s.length;i++){
//       if(s.indexOf(s[i])===s.lastIndexOf(s[i])){ return i} 
     
//     }
//     return -1; 
// };
​
​
// var firstUniqChar = function(s) {
//     var map=new Map();
//     for(i=0;i<s.length;i++){
//         if(map.has(s[i])){
//             map.set(s[i],2);
//         }
//         else{
//             map.set(s[i],1);
//         }
//     }
// console.log(map)
//     for(i=0;i<s.length;i++){
//         if(map.has(s[i]) && map.get(s[i])===1){
//             return i;
//         }
//     }
//     return -1;
// } ;
​
​
​
