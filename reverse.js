const linkedList = require('./linkedList');
const main = require('./main');

function reverse(list) {
    let current = list.head;
    // console.log(current);
    let newList = new linkedList();
    let newNode = list.head;
    while (current) {
        if (current.next === null) {
            newNode.next = newNode;
            newNode = current;
            newNode = newList.head;
            console.log('newNode', newNode, 'current', current);
        } else {
            newNode.next = newNode;
            newNode = current;
            current = current.next;
            console.log('newNode', newNode, 'current', current);
        }
        
    }
    console.log(newList);
}

reverse(main());