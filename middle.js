const linkedList = require('./linkedList');
const main = require('./main');

function middle(list) {
    let current = list.head;
    let middleItem = list.head;
    while (current.next !== null && current.next.next !== null) {
        middleItem = middleItem.next;
        current = current.next.next;
    }
    console.log(middleItem);
    return middleItem;
}

middle(main());