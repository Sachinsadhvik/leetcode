/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   var x=nums.indexOf(target);
    if(x==-1){
        return [-1,-1];
    }
    if(nums[x+1]==target){ var y=x+1;
    while(nums[y]==target){
        y=y+1;
    }
    
     return [x,y-1]                    }
   
    
   else {
       return [x,x]
   }
​
​
};
