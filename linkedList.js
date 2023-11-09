class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(value) {
    this.node = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }
  prepend(value) {
    //add a new node to the start of the list
    this.count++;
    let newNode = new Node(value);
    newNode.nextNode = this.node;
    this.node = newNode;
  }
  append(value) {
    //add a new node to the end of the list
    this.count++;
    if (!this.node) {
      this.node = new Node(value);
    } else {
      const traverseList = (node) => {
        if (node.nextNode === null) {
          const newNode = new Node(value);
          node.nextNode = newNode;
        } else {
          traverseList(node.nextNode);
        }
      };
      traverseList(this.node);
    }
  }
  head() {
    // //return first node in the list
    return this.node;
  }
  tail() {
    //return last node in the list
    const traverseList = (node) => {
      if (node.nextNode === null) {
        return node;
      } else {
        return traverseList(node.nextNode);
      }
    };
    return traverseList(this.node);
  }
  at(index) {
    //return node at given index
    let currentNode = this.node;
    let currentIndex = 0;

    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    if (currentNode === null) {
      return null;
    }
    return currentNode;
  }
  pop() {
    //remove last element from the list
    const traverseList = (node) => {
      if (node.nextNode === null) {
        return null;
      } else {
        node.nextNode = traverseList(node.nextNode);
        return node;
      }
    };
    this.node = traverseList(this.node);
  }
  contains(value) {
    //returns true if the passed in value is in the list and otherwise returns false
    const traverseList = (node) => {
      if (node === null) {
        return false;
      }
      if (node.value === value) {
        return true;
      } else {
        return traverseList(node.nextNode);
      }
    };
    return traverseList(this.node);
  }
  find(value) {
    // returns the index of the node containing value, or null if not found.
    let currentIndex = 0;

    const traverseList = (node) => {
      currentIndex++;
      if (node === null) {
        return null;
      }
      if (node.value === value) {
        return currentIndex;
      } else {
        return traverseList(node.nextNode);
      }
    };
    return traverseList(this.node);
  }
  toString() {
    //represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let result = "";
    let currentNode = this.node;
    while (currentNode) {
      result += `(${currentNode.value})->`;
      currentNode = currentNode.nextNode;
    }
    result += "null";
    return result;
  }
  insertAt(value, index) {
    //inserts a new node with the provided value at the given index
    if (index < 0 || index > this.count) return;
    this.count++;

    if (index === 0) {
      let newNode = new Node(value);
      newNode.nextNode = this.node;
      this.node = newNode;
      return;
    }
    let currentIndex = 0;

    const traverseList = (node) => {
      if (currentIndex === index - 1) {
        let newNode = new Node(value);
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
        return;
      } else {
        currentIndex++;
        return traverseList(node.nextNode);
      }
    };
    traverseList(this.node);
  }
  removeAt(index) {
    //removes the node at the given index
    if (index < 0 || index >= this.count) return;
    this.count--;

    if (index === 0) {
      this.node = this.node.nextNode;
      return;
    }
    let currentIndex = 0;

    const traverseList = (node) => {
      if (currentIndex === index - 1) {
        node.nextNode = node.nextNode.nextNode;
        return;
      } else {
        currentIndex++;
        return traverseList(node.nextNode);
      }
    };
    traverseList(this.node);
  }
}
const myList = new LinkedList(88);
// ("67,8,15,88,3,21,90,41,66");
myList.prepend(15);
myList.prepend(8);
myList.prepend(67);
myList.append(3);
myList.append(21);
myList.append(90);
myList.append(41);
myList.append(66);
console.log(myList.size());
console.log("head:", myList.head().value);
console.log("tail:", myList.tail().value);
myList.pop();
console.log("tail:", myList.tail().value);
console.log(myList.at(1).value);
console.log(myList.contains(3));
console.log(myList.find(41));
console.log(myList.toString());
myList.insertAt(110, 3);
console.log(myList.toString());
myList.removeAt(4);
console.log(myList.toString());
