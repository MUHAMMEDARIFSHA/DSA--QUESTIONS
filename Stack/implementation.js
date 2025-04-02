// implement a simple stack using js class


class Stack {
    constructor() {
        this.stack = []
    }
    push(element) {
        this.stack.push(element)
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty, can't pop"
        }
        return this.stack.pop()
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack is empth, can't peek"
        }
        return this.stack[this.size() - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }
    size() {
        return this.stack.length
    }
    print() {
        console.log(this.stack.reverse().join(" -> "));
        // for(let i =0;i<this.size();i++){
        //     console.log(this.stack[i])
        // }
    }

}

let newStack = new Stack()
newStack.push(1)
newStack.push(2)
newStack.push(3)

console.log(newStack)
newStack.pop()
console.log(newStack.peek())
console.log(newStack)
newStack.print()


// Practice ==>

class Stack_1 {
    constructor() {
        this.stack = []
    }
    push(element) {
        this.stack.push(element)
    }
    pop() {
        if (this.isEmpty()) {
            return "This is an empty stack"
        }
        return this.stack.pop()
    }
    peek() {
        if (this.isEmpty()) {
            return "Stack empty"
        }
        return this.stack[this.size() - 1]
    }
    isEmpty() {
        return this.stack.length === 0
    }
    size() {
        return this.stack.length
    }
}

let stack_1 = new Stack_1()
stack_1.push(1)
stack_1.push(2)
stack_1.push(3)
console.log(stack_1)
stack_1.pop()
stack_1.pop()
stack_1.pop()
console.log(stack_1)
console.log(stack_1.peek())


