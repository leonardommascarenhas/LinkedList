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
    let temp = this.head;
    while (temp.nextNode.nextNode != null) {
      temp = temp.nextNode;
    }
    temp.nextNode = null;
  }
}

let teste = new List();

teste.append("a");
console.log(teste);
teste.append("a");
console.log(teste);
teste.append("3");
console.log(teste);
teste.append("a");
teste.append("2");
teste.append("b");
teste.pop();
console.log(teste.getTail());
console.log(teste.pop());
