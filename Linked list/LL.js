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
        this.size++
    }

    // insert last node
    insertLast(data){
        let node = new Node(data)
        let current

        // if empty, make head
        if(!this.head){
            this.head = node
        }else{
            current = this.head
            while(current.next){
                current = current.next
            }

            current.next = node
        }
        this.size++
    }

    // insert at index
    insertAt(data,index){

        // if index is out of range
        if(index > 0 && index > this.size){
            return
        }

        // if first index
        if(index === 0){
            this.insertFirst(data)
            return
        }

        const node = new Node(data)
        let current, previous

        // Set current to first
        current = this.head;
        let count = 0
        while(count < index){
            previous = current // Node before index
            count++
            current = current.next // Node after the index
        }

        node.next = current
        previous.next = node
        
        this.size++

    }


    // get at index
    getAt(index){
       let  current = this.head
        let count = 0
        while(current){
            if(count == index){
               console.log(current.data) 
               return current.data;
            }
            count++
            current = current.next
        }

        return null
    }

    // rm at index

    removeAt(index){
        if(index > 0 && index > this.size){
            return 
        }

        let previous
        let current = this.head
        let count = 0

        // Remove first
        if(index === 1){
            this.head = current.next
        }else{
            while(count < index){
                previous = current
                count++
                current = current.next
            }
            previous.next = current.next
        }
        this.size--

    }


    // Clear the list
    clearList(){
        this.head = null
        this.size = 0
    }


    // print list data
    printListData(){
        let res = ''
       let current = this.head;
       while(current){
        console.log(current.data)
        res += `${current.data} -> `
        current = current.next
       } 
       return res

    }

}


const ll = new LinkedList();
const  ll2 = new LinkedList()

ll.insertFirst(1)
ll.insertFirst(1)

console.log(ll.printListData())


ll2.insertFirst(1)
ll2.insertLast(3)
ll2.insertLast(4)

console.log(ll2.printListData())
