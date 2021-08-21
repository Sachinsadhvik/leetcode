/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low=0;
    let high= nums.length-1;
    while(low<=high){
        mid= Math.floor((low+high)/2);
        if(nums[mid]==target){
return mid;}
        
        else if(nums[mid]>target){
            high=mid-1;
        }
        else {
            low =mid+1;
        }   
        
    }
   return low; 
   
};
​
​
// for(let i=0;i<nums.length;i++){
// if(nums[i]==target){
//     return i
// }
// else if(nums[i]>target){
//     return i;
// }
  
// }
//  return nums.length;  
​
​
​
// var searchInsert = function(nums, target) {
//    for( let i = 0; i < nums.length;i++){
//        if( target <= nums[i]) return i;
//    }
    
//     return nums.length;
// };
