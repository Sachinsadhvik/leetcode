/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums){
// let red = 0;
//     let white = 0; 
//     let blue = nums.length - 1;
    
    
//     while (white <= blue) {
//         if (nums[white] === 0) {
//             [nums[white], nums[red]] = [nums[red], nums[white]];
//             white++; red++;
//         } else if (nums[white] === 1) {
//             white++;
//         } else {
//             [nums[white], nums[blue]] = [nums[blue], nums[white]];
//             blue--;
//         }
//     }
    
// };
//bubble sort
var sortColors = function(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
        if(nums[j]>nums[j+1]){
            let temp=nums[j];
            nums[j]=nums[j+1];
            nums[j+1]=temp;
        }
        
        }
    }
}; 
​
// var sortColors = function(nums){
//     function swap(i,j){
//         [nums[i],nums[j]]=[nums[j],nums[i]]
//     }
//      let first=0;
//      let last=nums.length-1;
//     let i=0;
//     while(i<=last){
//         const value=nums[i];
//         if(value===0){
//             swap(i,first);
//             first++;
//             i++;
