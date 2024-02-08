class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor() {
        this.root = null;
    }

    isTreeEmpty() {
        return this.root === null;
    }

    makeTree(val) {
        let newNode = new Node(val);

        if (this.isTreeEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    searchNode(root, val) {
        if (root === null) {
            return false;
        } else if (root.value === val) {
            return true;
        } else if (root.value > val) {
            return this.searchNode(root.left, val);
        } else {
            return this.searchNode(root.right, val);
        }
    }

    deleteNode(root, key) {
        if (root === null) {
            return root;
        }

        if (key < root.value) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.value) {
            root.right = this.deleteNode(root.right, key);
        } else {
            // Node with only one child or no child
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            // Node with two children
            root.value = this.getMinValue(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }

        return root;
    }

    getMinValue(root) {
        let current = root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.value;
    }
}

let bst = new BSTree();

bst.makeTree(20);
bst.makeTree(15);
bst.makeTree(10);
bst.makeTree(17);
bst.makeTree(5);
bst.makeTree(6);
bst.makeTree(25);
bst.makeTree(22);
bst.makeTree(28);

console.log("Original BST:");
console.log(bst);

// Deleting a node (e.g., 5)
const keyToDelete = 5;
bst.root = bst.deleteNode(bst.root, keyToDelete);

console.log(`BST after deleting node with value ${keyToDelete}:`);
console.log(bst);

