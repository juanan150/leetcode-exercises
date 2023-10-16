var removeNthFromEnd = function (head, n) {
    if (!head.next) return null
    function checkLast(headi) {
        if (!headi.next) {
            return 1
        }

        const currHead = checkLast(headi.next) + 1
        if (currHead === n + 1) {
            headi.next = headi.next.next
        } else {
            return currHead
        }
    }
    const isFirstNode = checkLast(head)
    if (isFirstNode) head = head.next
    return head
};
