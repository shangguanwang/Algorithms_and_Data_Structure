// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    //create two stacks inside the constructor
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record){
        this.first.push(record);
    }

    remove(){
        //move everything from stack A to stack B
        while (this.first.peek()){
            const record = this.first.pop();
            this.second.push(record);
        }
        const result = this.second.pop(); //remove the item from B
        // move the remaining back to stack A
        while (this.second.peek()){
            this.first.push(this.second.pop())
        }
        //return the removed item
        return result;
    }

    peek(){
        //move everything from stack A to stack B
        while (this.first.peek()){
            this.second.push(this.first.pop())
        }
        const result = this.second.peek(); //peek at B
        //restore everything back at A
        while (this.second.peek()){
            this.first.push(this.second.pop())
        }
        return result;
    }
}

module.exports = Queue;