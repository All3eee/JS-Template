//Uppgift 1
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
class Stack {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
    
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          const temp = this.head;
          this.head = newNode;
          this.head.next = temp;
        }
    
        this.length++;
        return this;
    }

    pop() {
      if (!this.head) return null;
  
      let temp = this.head;
      this.head = this.head.next;
  
      this.length--;
      return temp.val;
    }
}
      

let ingenbörjan = 0
const stack = new Stack();
let bingbong = 0
let uttryck = prompt('Vilket uttryck vill du kolla?')
for (i = 0; i < uttryck.length; i++) { 
  if (uttryck[i] === '(' ) {
    stack.push(uttryck[i])
  } else if (uttryck[i] === ')') {
      if (stack.length == 0) {
        bingbong += 1
      } else {
        stack.pop()
      }
  } if (bingbong > stack.length) {
    console.log('Obalanserad')
    ingenbörjan += 1
    break;
  }
}


if (stack.length - bingbong === 0) {
  console.log('Balanserad')
  } else if (ingenbörjan = 0) {
    console.log('Obalanserad')
}
    









/*CheckStack(val) {
  for (let i = 0; i < val.length; i++) {
      let valposition = val[i];
      if (valposition == '(') {
          this.length += 1
          console.log(this.length)
      } else if (valposition == ')') {
          this.length -= 1
      } else {
          continue
      }
  }
  if (this.length == 0) {
      console.log('Balanserad')
  } else {
      console.log('Obalanserad')
  }
}
}**/
