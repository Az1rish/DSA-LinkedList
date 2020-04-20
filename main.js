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
    SSL.insertAfter('HotDog', 'Helo');
    SSL.insertAt('Kat', 3);
    SSL.remove('Tauhida');

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