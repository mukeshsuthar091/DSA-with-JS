class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BSTree{
    constructor(){
        this.root = null;
    }

    isTreeEmpty(){
        return this.root===null
    }

    makeTree(val){
        let newNode = new Node(val);

        if(this.isTreeEmpty()){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode){
        if(root.value > newNode.value){
            if(root.left === null){
                root.left = newNode;
            }
            else{
                this.insertNode(root.left, newNode);
            }
        }
        else{
            if(root.right === null){
                root.right = newNode;
            }
            else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    searchNode(root, val){
        if(root === null){
            return false;
        } else if(root.value === val){
            return true;
        } else if(root.value > val){
            return this.searchNode(root.left, val);
        } else{
            return this.searchNode(root.right, val);
        }
    }

    
}

let bst = new BSTree()

bst.makeTree(20);
bst.makeTree(15);
bst.makeTree(10);
bst.makeTree(17);
bst.makeTree(5);
bst.makeTree(6);
bst.makeTree(25);
bst.makeTree(22);
bst.makeTree(28);

console.log(bst)

// console.log(bst.searchNode(bst.root, 4));
console.log(bst.searchNode(bst.root, 5));