/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
 
    let low=0, high=x;
    while(low<high){
        const mid= parseInt((low+high)/2);
        if(mid * mid === x){
            return mid;
        }
        if(x<mid * mid ){
           high= mid-1
       } 
        else {
            low= mid+1;
        }
        
    }
    
    return x < high * high ? high - 1 : high; 
}
   // for(let i=0;i<=x;i++){
   //     if(i*i==x){
   //         return i;
   //     }
   //     else if(i*i>x){return i-1}
   // } }
