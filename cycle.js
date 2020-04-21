const linkedList = require('./linkedList');

function main() {
    const SSL = new linkedList();

    SSL.insertLast('Apollo');
    SSL.insertLast('Boomer');
    SSL.insertLast('Helo');
    SSL.insertLast('Husker');
    SSL.insertLast('Starbuck');
    SSL.insertLast('Tauhida');
    SSL.insertFirst('Husker');

    return SSL;
}

function display(list) {
    let current = list.head;

    while (current !== null) {
        console.log(current);
        current = current.next;
    }
}

display(main());