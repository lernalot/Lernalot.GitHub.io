/**
 * 
 * @description
 */

function isPalindrome(head) {
    let fast = head, slow = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
        if (fast.val === slow.val) {
            return true;
        }
    }
    if (fast) {
        slow = slow.next
    }
    if (fast.val === slow.val) {
        return true;
    }
    return false;
}