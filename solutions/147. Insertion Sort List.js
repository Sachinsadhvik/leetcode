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
function insertionSortList(head) {
    var before = { val: -Number.MAX_VALUE, next: null };
    
    while (head) {
        var prev = before;
        
        // find prev
        while (prev.next && prev.next.val < head.val) {
            prev = prev.next;
        }
        
        var next = head.next;
        head.next = prev.next;
        prev.next = head;
        head = next;
    }
    
    return before.next;
}
