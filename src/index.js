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
    if (this.head === null) this.head = new Node(value);
  }
}
