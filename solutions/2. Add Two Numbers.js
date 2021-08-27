//         l2=l2.next 
//         }
//     }
​
//     // m= (parseInt(x)+parseInt(y)).toString().split("").reverse()
//     m=parseInt(x)+parseInt(y).toString()
//      const before = new ListNode();
//    let tail = before;
//     for(let i=0;i<m.length;i++){
       
//        tail.next= new ListNode(m[i]);
//        tail=tail.next
//     }
    
//     return before.next}
 var addTwoNumbers = function(l1, l2) {
const before = new ListNode();
  let tail = before;
  let c = 0;
​
  while (l1 || l2 || c) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const v = v1+v2+c;
​
    tail.next = new ListNode(v%10);
    tail = tail.next;
    c = v >= 10 ? 1 : 0;
    l1 = l1&&l1.next;
    l2 = l2&&l2.next;
  }
     return before.next;
 }
