class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }
  append(value) {
    if (this.head === null) this.head = new Node(value);
    else {
      let temp = this.head;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new Node(value);
    }
  }
  prepend(value) {
    let temp = this.head;
    this.head = new Node(value);
    this.head.nextNode = temp;
  }
  size() {
    size = 0;
    if (this.head === null) return size;
    else {
      let temp = this.head;
      size = 1;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
        size++;
      }
      return size;
    }
  }
  getHead() {
    return this.head;
  }
  getTail() {
    if (this.head === null) return this.head;
    else {
      let temp = this.head;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      return temp;
    }
  }
  at(index) {
    count = 0;
    if (this.head === null) return null;
    if (index === 0) return this.head;
    if (index > this.size()) return "Not found";
    let temp = this.head;
    while (count !== index) {
      count++;
      temp = temp.nextNode;
    }
    return temp;
  }
  pop() {
    if (this.head === null) return null;
    else {
      let temp = this.head;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp == null;
      return this.head;
    }
  }
}
