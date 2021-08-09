/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var longestCommonPrefix = function(nums) {
    prefix=''
    smallWord=nums[0]
    nums.map((value)=>{
        if(value.length>smallWord.length){
            
        }
        else {
            smallWord=value;
        }
    })
    
  for(let i=0;i<smallWord.length;i++){
    for(let j=0;j<nums.length;j++){
      if(nums[j][i]!=smallWord[i]){
        return prefix;
      }
        
    }
    
    prefix=prefix+smallWord[i];
  }
  
  return prefix; }
