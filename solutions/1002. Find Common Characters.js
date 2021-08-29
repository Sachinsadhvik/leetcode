/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let res=[...words[0]]
for(let i=1;i<words.length;i++){
     res=res.filter((c)=>{
        const x =words[i].length;
        words[i]=words[i].replace(c,"")
        return x>words[i].length;
})
​
}
    
  return res;  
}
