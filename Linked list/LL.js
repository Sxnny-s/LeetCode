class Node {
<<<<<<< HEAD
    constructor(val,next = null){
        this.val = val 
=======
    constructor(data,next = null){
        this.data = data;
>>>>>>> 757d95ffc97e0bf19004cd32c5030c1810a0c9a5
        this.next = next
    }
}

<<<<<<< HEAD
class linkedList{
   constructor(){
     this.head = null
     this.size = 0
   }

   // insert at start
   insertStart(val){
    let node = new Node(val,this.head)
    this.head = node
    this.size++

   }

    // insert at end 

    insertEnd(val){
        let cur = this.head
        while(cur.next){
            cur = cur.next
        }
        let node = new Node(val)
        cur.next = node
        this.size++
    }
    
    

    // get val
    getVal(index){
        let cur = this.head
        let count = 0
        while(count < index){
            cur = cur.next
            count++
        }

        return cur.val
=======
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
>>>>>>> 757d95ffc97e0bf19004cd32c5030c1810a0c9a5

    }


<<<<<<< HEAD

    //insert at index
    insertAt(index,val){
        let cur = this.head
        let prev 
        let count = 0
        while(count < index){
            prev = cur
            cur = cur.next
            count++
        }
        
        let node = new Node(val)
        prev.next = node
        node.next = cur
        
    }



    //rm at index


    //reverse list 


    //print list
    print(){
        let cur = this.head
        let res = ''
        while(cur){
            res += `${cur.val} -> `
            cur = cur.next
        }
        res += ' null'
        res
        return res
    }
}

const ll = new linkedList()
ll.insertStart(200)
ll.insertStart(100)
ll.insertEnd(300)
console.log(ll.getVal(0))
ll.insertAt(1,0) 
ll.print()
=======
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
>>>>>>> 757d95ffc97e0bf19004cd32c5030c1810a0c9a5
