class Node {
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    // insertFirst
    insertFirst(val){
        let node = new Node(val,this.head)
        this.head = node
        this.size++
    }
    // insertLast
    insertLast(val){
        if(!this.head){
            this.insertFirst(val)
        }else{
            let node = new Node(val)
            let cur = this.head
            while(cur.next){
                cur = cur.next
            }
            cur.next = node
            this.size++
        }
    }
    // insert at index
    insertAt(val,index){
        if(index <= 0){
            this.insertFirst(val)
        }else if(index > this.size){
            this.insertLast(val)
        }else{
            let prev
            let cur = this.head
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
        this.size++
    }
    // rm At index
    rm(index){
        index
        if (index > this.size) {
            index = this.size - 1
        }
        index
        // if index is head
        let prev 
        let cur = this.head
        let count = 0  
        if(index <= 0){
            this.head = this.head.next
        }else{ 
            while(count < index){
                prev = cur
                cur = cur.next
                count++
        }
        prev.next = cur.next
    }
    this.size--
    }
    // get val at index
    getVal(index){
        let cur = this.head
        let count = 0
        if(index > this.size){
            index = this.size - 1
        }
        while(count < index){
            cur = cur.next
            count++
        }
        return cur.val

    }

    // getSize
    getSize(){
        return this.size
    }
    // print vals 
    print(){
        let cur = this.head
        let res = ''
        while(cur){
            res += `${cur.val} -> `
            cur = cur.next
        }
        res += 'null'
        res
        return res
    }
  
    
}


let ll = new linkedList()
let i = 0

while(i < 10){
    ll.insertLast(i)
    i++
}



ll.insertAt(20,99)
ll.insertAt(21,99)
ll.insertAt(22,99)
console.log(ll.print())

console.log(ll.getSize())