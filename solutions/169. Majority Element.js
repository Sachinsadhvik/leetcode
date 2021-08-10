/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     map1={ }
  nums.map((x)=>{
    map1[x]=map1[x]+1 || 1;
  })
  for(keys in map1){
   
    if(map1[keys]>nums.length/2){
      max=map1[keys]
      x=keys
    }
   
  }
  return x
};
