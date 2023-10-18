var removeElements = function (head, val) {
    if (!head) return null
    while (head?.val === val) {
        head = head.next
    }
    let ahead = head?.next
    let result = head
    while (ahead) {
        if (ahead.val === val) {
            head.next = head.next.next
        } else {
            head = head.next
        }
        ahead = head?.next
    }
    return result
};
