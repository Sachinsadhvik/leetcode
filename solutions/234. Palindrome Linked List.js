/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {
    
//       var current=head;
//     var arr=[]
//     while(current){
//       arr.unshift(current.val)
//         current=current.next;
//     }
//  return arr.every((e, i) => e === arr[arr.length - i - 1])
// };
var isPalindrome = function(head) {
 let p = s = f = head,
        rev = null
    // move s to mid
    while(f && f.next) {
        f = f.next.next
        s = s.next
    }
    // reverse 2nd half
    while(s){
        let t = s.next
        s.next = rev
        rev = s
        s = t
    }
    // compare 1st and 2nd half
    while (rev && p) {
        if (p.val !== rev.val) return false
        p = p.next
        rev = rev.next
    }
    return true;
}  
