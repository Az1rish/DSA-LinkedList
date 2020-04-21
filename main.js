const linkedList = require('./linkedList');

function main() {
    const SSL = new linkedList();

    SSL.insertLast('Apollo');
    SSL.insertLast('Boomer');
    SSL.insertLast('Helo');
    SSL.insertLast('Husker');
    SSL.insertLast('Starbuck');
    SSL.insertLast('Tauhida');
    SSL.remove('Husker');
    SSL.insertBefore('Athena', 'Boomer');
    SSL.insertAfter('HotDog', 'Helo');
    SSL.insertAt('Kat', 3);
    SSL.remove('Tauhida');

    return SSL;
}

function display(list) {
    let current = list.head;

    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

// display(main());

function size(list) {
    let current = list.head;
    let count = 0;
    while (current !== null) {
        count++;
        current = current.next;
    }
    console.log('size = ', count);
}

// size(main());

function isEmpty(list) {
    let current = list.head;
    if (!current) {
        console.log('This list is empty');
    } else {
        console.log('This list is not empty');
    }
}

// isEmpty(main());

function findPrevious(list, node) {
    let current = list.head;
    while (current.next !== null) {
        if (current.next.value === node) {
            console.log('Previous is', current.value);
            return;
        }
        current = current.next;
    }
    console.log('That item is not on the list');
}

// findPrevious(main(), 'Helo');

function findLast(list) {
    let current = list.head;
    if (!current) {
        console.log('The list is empty');
    }
    while (current) {
        if (current.next === null) {
            console.log('The last item is', current.value);
        }
        current = current.next;
    }
}

// findLast(main());
module.exports = main;