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

    isRootEmpty(){
        return this.root === null;
    }

    makeTree(value){
        let newNode = new Node(value);

        if(this.isRootEmpty()){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode)
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
        }else{
            if(root.right === null){
                root.right = newNode;
            }
            else{
                this.insertNode(root.right, newNode);
            }
        }
    }

    searchNode(root, value){
        if(root===null){
            return false;
        }
        else if(root.value === value){
            return true
        }
        else if(root.value > value){
            return this.searchNode(root.left, value)
        }
        else{
            return this.searchNode(root.right, value)
        }
    }
}

let bst = new BSTree();
bst.makeTree(50);
bst.makeTree(30);
bst.makeTree(15);
bst.makeTree(10);
bst.makeTree(70);
bst.makeTree(60);
bst.makeTree(76);

console.log(bst.searchNode(bst.root, 75))
console.log(bst)