const linkedList = require('./linkedList');

function main() {
    const SSL = new linkedList();
    SSL.insertLast('Apollo');
    SSL.insertLast('Boomer');
    SSL.insertLast('Helo');
    SSL.insertLast('Husker');
    SSL.insertLast('Starbuck');
    // console.log(SSL);
    SSL.insertLast('Tauhida');
    SSL.remove('Husker');
    SSL.insertBefore('Athena', 'Boomer');

    let current = SSL.head;

    while (current !== null) {
        // if (!current.next) {
            // console.log('current', current.value, 'next null')
        // }
        // else {
            console.log('current', current.value);
        // }
        current = current.next;
    }
}

main();