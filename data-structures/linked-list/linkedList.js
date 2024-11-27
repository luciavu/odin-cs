import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value, null);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;

    if (this.size() === 0) {
      this.tail = newNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.nextNode;
    }
    return curr;
  }

  pop() {
    if (this.size() <= 0) {
      return;
    }

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;

      while (curr.nextNode !== this.tail) {
        curr = curr.nextNode;
      }

      curr.nextNode = null;
      this.tail = curr;
    }
    this.length--;
  }

  contains(value) {
    let curr = this.head;

    while (curr !== null) {
      if (curr.value == value) {
        return true;
      }
      curr = curr.nextNode;
    }
    return false;
  }

  find(value) {
    let curr = this.head;
    let index = 0;

    while (curr !== null) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.nextNode;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size()) {
      this.append(value);
    } else {
      let curr = this.head;
      let previous;
      let newNode = new Node(value);

      for (let i = 0; i < index; i++) {
        previous = curr;
        curr = curr.nextNode;
      }
      previous.nextNode = newNode;
      newNode.nextNode = curr;
      this.length++;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      return;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
    } else if (index === this.size()) {
      this.tail = null;
    } else {
      let curr = this.head;
      let previous;

      for (let i = 0; i < index; i++) {
        previous = curr;
        curr = curr.nextNode;
      }
      previous.nextNode = curr.nextNode;

      if (curr === this.tail) {
        this.tail = previous;
      }
    }
    this.length--;
  }

  toString() {
    let curr = this.head;
    let str = '';

    while (curr !== null) {
      str += `( ${curr.value} ) -> `;
      curr = curr.nextNode;
    }
    str += ' null';
    return str;
  }
}
