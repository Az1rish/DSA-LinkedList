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
            console.log(current.value);
            current = current.next;
        }
    }
    console.log(display(newList));
}

reverse(main());