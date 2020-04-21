const linkedList = require('./linkedList');
const main = require('./main');

function reverse(list) {
    let current = list.head;
    let newList = new linkedList();
    function findLast(linkedList) {
        let current = linkedList.head;
        while (current) {
            if (current.next === null) {
                return current;
            }
            current = current.next;
        }
    }
    while (findLast(list)) {
        newList.insertLast(findLast(list).value);
        list.remove(findLast(list).value);
    }
    function display(list) {
        let current = list.head;
    
        while (current !== null) {
            console.log('current', current.value, 'next', current.next);
            current = current.next;
        }
    }
    display(newList);
    return newList;
}

reverse(main());