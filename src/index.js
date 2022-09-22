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
    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      temp.nextNode = newNode;
    }
  }
  prepend(value) {
    let temp = this.head;
    this.head = new Node(value);
    this.head.nextNode = temp;
  }
  size() {
    let size = 0;
    if (this.head === null) return size;
    else {
      let temp = this.head;
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
    let temp = this.head;
    while (temp.nextNode.nextNode != null) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  }
  contains(value) {
    let temp = this.head;
    while (temp.value != value) {
      temp = temp.nextNode;
      if (temp.nextNode == null) {
        return false;
      } else {
        return true;
      }
    }
  }
}

let teste = new List();

teste.append("a");
teste.append("a");
teste.append("a");
teste.append("a");
teste.append("a");
teste.append("a");
teste.append("a");
teste.append("b");
teste.append("a");
teste.append("a");
teste.append("a");

console.log(teste.contains(a));
