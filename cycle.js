const linkedList = require('./linkedList');

function main() {
    const SSL = new linkedList();

    SSL.insertLast('Apollo');
    SSL.insertLast('Boomer');
    SSL.insertLast('Helo');
    SSL.insertLast('Husker');
    SSL.insertLast('Starbuck');
    SSL.insertLast('Tauhida');

    return SSL;
}

function makeCycle(list) {
    let current = list.head;
    let prev = null;

    while (current) {
        prev = current;
        current = current.next;
    }
    prev.next = list.head;
    // console.log(list)
    return list;
}

// makeCycle(main());

function display(list) {
    let current = list.head;

    while (current !== null) {
        console.log(current);
        current = current.next;
    }
}

// display(makeCycle(main()));

function hasCycle(list) {
    let slow = list.head;
    let fast = list.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }

    return false;
}

console.log(hasCycle(makeCycle(main())));
console.log(hasCycle(main()));