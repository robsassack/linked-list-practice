class LinkedList {
  constructor() {
    this.HEAD = null;
  }

  head() {
    return this.HEAD;
  }

  tail() {
    let current = this.HEAD;
    while (current) {
      if (current.nextNode === null) {
        return current;
      }
      current = current.nextNode;
    }
  }

  append(value) {
    const newNode = new Node(value);
    const tail = this.tail();
    if (!this.HEAD) {
      this.HEAD = newNode;
      return;
    }
    tail.nextNode = newNode;
    return;
  }

  prepend(value) {
    const newNode = new Node(value);
    const temp = this.HEAD;
    if (temp !== null) {
      newNode.nextNode = temp;
    }
    this.HEAD = newNode;
  }

  size() {
    let current = this.HEAD;
    let count = 0;
    while (current) {
      current = current.nextNode;
      count++;
    }
    return count;
  }

  at(index) {
    let current = this.HEAD;
    if (index < 0 || index > this.size()) return null;
    if (index === 0) return current;
    let count = 0;
    while (current) {
      if (count === index) return current;
      current = current.nextNode;
      count++;
    }
  }

  toString() {
    let current = this.HEAD;
    let str = '';
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return str + 'null';
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.prepend(0);
console.log(`String: ${ list.toString() }`);
console.log(`Tail: ${ list.tail().value }`);
console.log(`Size: ${ list.size() }`);
console.log(`At Position 3: ${ list.at(3).value }`);
