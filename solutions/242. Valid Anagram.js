/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     if(s.length!=t.length){
//         return false;
//     }
//     else {
//         return s.split("").sort().join("")==t.split("").sort().join("")
//     }
// };
​
​
var isAnagram = function(s, t) {
  let words={};
    if(s.length!=t.length) return false;
    for( i in s){ 
      words[s[i]]=  words[s[i]]+1 || 1;
      
    }
    for( c in t) {
      if(!words[t[c]]) return false;
      words[t[c]]--
      
      
    }
    
return true
}
