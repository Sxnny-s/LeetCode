class Node {
    constructor(val,next = null){
        this.val = val 
        this.next = next
    }
}

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

    }



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
