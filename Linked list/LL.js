class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }
    // insert first node
    insertFirst(data){
        this.head = new Node(data, this.head)
    }

    // insert last node


    // insert at index


    // get at index


    // rm at index


    // Clear the list


    // print list data

}


const ll = new LinkedList();

console.log(ll)
ll.insertFirst(100)
console.log(ll)
ll.insertFirst(200)
console.log(ll)
