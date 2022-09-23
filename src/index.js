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
    const newNode = new Node(value);
    if (this.head == null) this.head = newNode;
    else {
      let temp = this.head;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp.nextNode = newNode;
    }
  }
  prepend(value) {
    let temp = this.head;
    temp.value = value;
  }
  size() {
    let size = 0;
    if (this.head === null) return size;
    else {
      size++;
      let temp = this.head;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
        size++;
      }
      return size;
    }
  }
  getHead() {
    if (this.head == null) return "no value";
    return this.head.value;
  }
  getTail() {
    if (this.head == null) return null;
    if (this.head.nextNode == null) return this.head;
    let temp = this.head;
    while (temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    return temp.value;
  }
  at(index) {
    let count = 0;
    let lastIndex = this.size() - 1;
    if (index == 0) return this.head.value;
    if (index > lastIndex || index < 0) return "error";
    let temp = this.head;
    while (index !== count) {
      count++;
      temp = temp.nextNode;
    }
    return temp.value;
  }
  pop() {
    if (this.head == null) return;
    let temp = this.head;
    while (temp.nextNode.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  }
  contains(value) {
    let temp = this.head;
    while (temp.nextNode.value !== value) {
      temp = temp.nextNode;
      if (temp.nextNode == null) return false;
    }
    return true;
  }
}

let teste = new List();

teste.append("a");
teste.append("b");
teste.append("c");
teste.pop();

console.log(teste.contains("a"));
