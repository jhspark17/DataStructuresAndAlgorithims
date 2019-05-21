// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
			this.value = val;
			this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
			this.head = null;
			this.tail = null;
			this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
			let newNode = new Node(val)
			
			if(!this.tail) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				this.tail.next = newNode;
				this.tail = newNode;
			}
			++this.length
			return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
			if (this.length === 0) return;
			let goneTail = this.tail;

			if (this.length === 1) {
				this.head = null;
				this.tail = null;
			} else {
				let currentNode = this.head;
				while (currentNode.next.value !== goneTail.value) {
					currentNode = currentNode.next;
				}
				currentNode.next = null
				this.tail = currentNode;
			}
			--this.length;
			return goneTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
			let newNode = new Node(val);
			if (!this.head) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				newNode.next = this.head;
				this.head = newNode;
			}
			++this.length
			return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
			if (this.length === 0) return;
			let goneHead = this.head;
			if (this.length === 1) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = this.head.next;
			}
			--this.length;
			return goneHead
    }

    // TODO: Implement the contains method here
    contains(target) {
			let currentNode = this.head;
			while (currentNode !== null) {
				if (currentNode.value === target) {
					return true;
				} else {
					currentNode = currentNode.next;
				}
			}
			return false;
    }

    // TODO: Implement the get method here
    get(index) {
			if (index > this.length) return null;
			let currentNode = this.head;
			let i = 0;
			while (i <= index) {
				if (i === index) {
					return currentNode
				} else {
					currentNode = currentNode.next;
				}
				i += 1;
			}
    }

    // TODO: Implement the set method here
    set(index, val) {
			let currentNode = this.head;
			let i = 0;
			while (i < this.length) {
				if (i === index) {
					currentNode.value = val;
					return true;
				} else {
					currentNode = currentNode.next;
				}
				i++
			}
			return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
			if (index >= this.length) return false;
			let newNode = new Node(val);
			let currentNode = this.head;
      let i = 0;
      while (true) {
        if (i === index - 1) {
					let nextNode = currentNode.next;
					currentNode.next = newNode;
					newNode.next = nextNode;
					++this.length;
          return true;
        } else {
          currentNode = currentNode.next;
        }
        i++;
      }
    }

    // TODO: Implement the remove method here
    remove(index) {
			if (index >= this.length) return;
			let currentNode = this.head;
			if (this.length === 1) {
				this.head = null;
				this.tail = null;
				return currentNode;
			}
			let i = 0;
			while (true) {
				if (i === index - 1) {
					let lostNode = currentNode.next;
					currentNode.next = lostNode.next;
					--this.length
					return lostNode;
				} else {
					currentNode = currentNode.next;
				}
				i++
			}
    }

    // TODO: Implement the size method here
    size() {
			return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
