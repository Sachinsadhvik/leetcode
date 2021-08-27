//      * temparary node.
//      */
//     while(left !== null || right !== null) {
//         if (left === null) {
//             pointer.next = right;
//             right = right.next;
//         } else if (right === null) {
//             pointer.next = left;
//             left = left.next;
//         } else {
//             if (left.val < right.val) {
//                 pointer.next = left;
//                 left = left.next;
//             } else {
//                 pointer.next = right;
//                 right = right.next;
//             }
//         }
//         pointer = pointer.next;
//     }
​
//     return root.next;
// }
​
var sortList = function(head) {
    current= head;
   var x=[]
    while(current){
        x.push(current.val)
       current=current.next;  
    }
    var middle=head;
   x.sort((a,b)=>a-b)
    let i=0;
    while(middle){
        middle.val=x[i];
        i++
         middle=middle.next;
    }
    
   return head ;
};
