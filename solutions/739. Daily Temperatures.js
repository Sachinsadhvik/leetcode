/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    obj=[]
    for(let i=0;i<temperatures.length;i++){ 
        for(let j=i+1;j<temperatures.length;j++){
            if(temperatures[j]>temperatures[i]){
              obj.push(j-i);
              break
            }
        
         
        }
        if(obj.length!=i+1){
          obj.push(0)
        }
        
    }
    
    
   return obj 
};
// var dailyTemperatures = function(temperatures) {
//     let res = Array.from({length:temperatures.length},x=>0);
//     let stack = [];
//     for(let i=0; i<temperatures.length; i++){
//      while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
//          let j = stack.pop();
//          res[j] = i-j;
//      }
//      stack.push(i);
//     }
//     return res;
// };
