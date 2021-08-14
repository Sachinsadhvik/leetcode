/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
   var current=head;
    var x=[]
    while(current){
      x.unshift(current.val)
        current=current.next;
    }
    current=head;
    for(let i=0;i<x.length;i++){
       current.val=x[i];
        current=current.next;
        
    }
   return head;
};
​
// var reverseList = function(head){
//     let [current, prev]=[head, null]
//     while(current){
//         [current.next, prev, current]=[prev, current, current.next]
//     }
//    return prev 
// }
