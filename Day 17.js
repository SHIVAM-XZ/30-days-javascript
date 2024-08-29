// Day 17: Data Structures

// Task1:
class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new node(10);
const node2 = new node(12);
node1.next = node2;
console.log(node1.value);
console.log(node1.next.value);

// Task2:
class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeNode(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value == value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value == value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  displayNode() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const mylist = new linkedList();
mylist.addNode(16);
mylist.addNode(15);
mylist.addNode(13);
mylist.displayNode();
mylist.removeNode(15);
mylist.displayNode();

// Task3:
class stack {
  constructor() {
    this.item = [];
  }
  push(element) {
    return this.item.push(element);
  }
  pop() {
    if (this.item.length == 0) {
      return "stack is empty";
    }
    return this.item.pop();
  }
  peek() {
    if (this.item.length == 0) {
      return "stack is empty";
    }
    return this.item[this.item.length - 1];
  }
}

const list = new stack();
list.push("apple");
list.push("mango");
list.push("grapes");
console.log(list.pop());
console.log(list.peek());

// Task4:
class Stack {
  constructor() {
    this.item = [];
  }
  push(element) {
    return this.item.push(element);
  }
  pop() {
    if (this.item.length == 0) {
      return "stack is empty";
    }
    return this.item.pop();
  }
  isEmpty() {
    return this.item.length == 0;
  }
}
function reversestr(str) {
  const stack = new Stack();
  let revstr = "";
  for (let i in str) {
    stack.push(str[i]);
  }
  while (!stack.isEmpty()) {
    revstr += stack.pop();
  }
  return revstr;
}

console.log(reversestr("Hello, kis"));

// Task5:
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
    return element;
  }
  dequeue() {
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  peek() {
    return this.items[this.frontIndex];
  }
}
const queue = new Queue();
console.log(queue.enqueue(7)); // Output: 7 inserted
console.log(queue.enqueue(2)); // Output: 2 inserted
console.log(queue.enqueue(6)); // Output: 6 inserted
console.log(queue.enqueue(4)); // Output: 4 inserted
console.log(queue.dequeue()); // Output: 7 (removed)
console.log(queue.peek()); // Output: 2 (front element)

// Task6:
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    return this.items.push(item);
  }
  dequeue() {
    if (this.items.length == 0) {
      return "queue is empty";
    }
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length == 0;
  }
}
const queue = new Queue();
console.log(queue.enqueue("job1"));
console.log(queue.enqueue("job2"));
console.log(queue.enqueue("job3"));
console.log(queue.peek());

while (!queue.isEmpty()) {
  const currentjob = queue.dequeue();
  console.log(`${currentjob}`);
}

// Task7:
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const rootNode = new TreeNode(10);
rootNode.left = new TreeNode(5);
rootNode.right = new TreeNode(17);

console.log(rootNode.value);
console.log(rootNode.left.value);
console.log(rootNode.right.value);

// Task8:
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarysearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      return (this.root = newNode);
    }
    return this.insertNode(this.root, newNode);
  }
  insertNode(node = this.root, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        return (node.left = newNode);
      } else {
        return this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        return (node.right = newNode);
      } else {
        return this.insertNode(node.right, newNode);
      }
    }
  }
  inOrderTraversal() {
    return this.inOrder(this.root);
  }
  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }
}
const bst = new BinarysearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("In-order traversal:");
bst.inOrderTraversal();
