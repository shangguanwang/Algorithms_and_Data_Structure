// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    // initialization
    constructor() {
        this.data = [];
    }
    // add method - add the record to the front
    add(record) {
        this.data.unshift(record);
    }
    // remove method - remove the last record
    remove(record) {
        return this.data.pop();
    }
}