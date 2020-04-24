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

function sort(list) {
    let temp = list.head;
    
    while (temp) {
        let min = temp;
        let r = temp.next;
        while (r) {
            if (min.value > r.value) {
                min = r;
            }
            
            r = r.next;
        }

        let x = temp.value;
        temp.value = min.value;
        min.value = x;
        temp = temp.next;
    }
   
    return list;
}

console.log('list', sort(main()));

