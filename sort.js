const LinkedList = require('./linkedList');

function main() {
    let unsortedList = new LinkedList();

    unsortedList.insertLast(3);
    unsortedList.insertLast(2);
    unsortedList.insertLast(5);
    unsortedList.insertLast(7);
    unsortedList.insertLast(1);

    return unsortedList;

}

// console.log(main());

function sort(list) {
    // if (!list.next) {
        // return list;
    // }

    let curr = list.head;
    // console.log('curr', curr)
    while (curr.next) {
        // console.log('loop', curr.value)
        if (curr.value > curr.next.value) {
            list.insertLast(curr.value);
            list.remove(curr.value);
        }
        console.log('curr', curr.value, 'head', list.head.value);
        curr = curr.next;
    }
   
    // console.log(list);
}

sort(main());