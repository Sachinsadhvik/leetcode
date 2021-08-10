/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
     var x=num.toString().split("")
   .reduce((x,value,array)=>{return x=parseInt(x)+parseInt(value)})
   if(x.toString().length==1){
     return x
   }
   else{
     return addDigits(x)
   }
   
    
};
