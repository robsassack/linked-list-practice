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

  pop() {
    if (this.HEAD === null) {
      return null;
    }
    if (this.size() === 1) {
      this.HEAD = null;
      return;
    }
    let current = this.HEAD;
    let tail = this.tail();
    while (current) {
      if (current.nextNode === tail) {
        current.nextNode = null;
        return;
      }
      current = current.nextNode;
    }
  }

  contains(value) {
    let current = this.HEAD;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.HEAD;
    let count = 0;
    while (current) {
      if (current.value === value) {
        return count;
      }
      current = current.nextNode;
      count++;
    }
    return null;
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

  insertAt(value, index) {
    if (index > this.size()) return null;
    const newNode = new Node(value);
    const prev = this.at(index - 1);
    const next = this.at(index);
    prev.nextNode = newNode;
    newNode.nextNode = next;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

let list = new LinkedList();
list.append('B');
list.append('C');
list.append('D');
list.append('E');
list.append('F');
list.prepend('A');
list.append('G');
list.insertAt('Z', 2)
list.pop();
console.log(`String: ${ list.toString() }`);
console.log(`Tail: ${ list.tail().value }`);
console.log(`Size: ${ list.size() }`);
console.log(`At Position 3: ${ list.at(3).value }`);
console.log(`Contains B: ${ list.contains('B') }`);
console.log(`Contains H: ${ list.contains('J') }`);
console.log(`Find D: ${ list.find('D') }`);
console.log(`Find Z: ${ list.find('Z') }`);
