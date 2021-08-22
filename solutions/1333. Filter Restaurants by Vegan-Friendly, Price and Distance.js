/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    if(veganFriendly==1){var y= restaurants.filter((x)=>{return x[2]==veganFriendly && x[3]<=maxPrice &&  x[4]<=maxDistance } )}
   else {    
   var y= restaurants.filter((x)=>{return  x[3]<=maxPrice &&  x[4]<=maxDistance })}
 return y.sort((a,b)=>{
    if(a[1]==b[1]) return b[0]-a[0];
 return b[1]-a[1]}).map((ele)=>ele[0])
};
