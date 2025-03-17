// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.


// this code works on leet code because of the linked list inbuld creation in leetcode

var reverseList = function(head) {
    let prev = null
    let current = head
    while(current){
      let next = current.next
       current.next = prev
       prev = current
       current = next
    }
    return prev
 };

 