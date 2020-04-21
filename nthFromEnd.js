const linkedList = require('./linkedList');
const main = require('./main');

function nthFromEnd(list, fromEnd) {
    function size(list) {
        let current = list.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    let listSize = size(list);
    let newLength = listSize - fromEnd;
    // console.log('newLength', newLength);
    let count = 0;
    let currNode = list.head;
    while (count < newLength) {
        currNode = currNode.next;
        count++;
    }
    console.log(currNode);
}

nthFromEnd(main(), 3);