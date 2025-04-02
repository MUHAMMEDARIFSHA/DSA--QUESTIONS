// Implement a simple queue

class Queue {
    constructor(){
      this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        this.queue.shift()
    }
    front(){
        if(this.isEmpty()){
            return "Underflow"
        }
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length ===0
    }
    size(){
        return this.queue.length
    }
    printQueue(){
        // let queueString  =''
        // for(let i =0;i<this.size();i++){
        //     queueString += this.queue[i] +' -> '
        // }
        // console.log(queueString)
        console.log(this.queue.join(" => "))
    }
}

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue)
queue.printQueue()
queue.dequeue()
queue.dequeue()
console.log(queue.front())
queue.dequeue()
console.log(queue.front())
queue.dequeue()
console.log(queue)
console.log(queue.front())
console.log(queue.size())
console.log(queue.isEmpty())

