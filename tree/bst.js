class Node {
    value = null;
    left = null;
    right = null;
    height = 0;
    constructor(value) {
        this.value = value;
    }
}
class Bst {
    root = null;
    constructor(value) {
        const node = this.makeNode(value);
        this.root = node;
    }
    makeNode(value) {
        const node = new Node(value);
        return node;
    }
    insertNode(value) {
        this.root = this.insert(value, this.root);
    }
    insert(value, node) {
        if (node == null) {
            const node = this.makeNode(value)
            return node;
        };
        if (value < node.value) {
            node.left = this.insert(value, node.left);
        }
        if (value > node.value) {
            node.right = this.insert(value, node.right);

        }
        node.height = Math.max(this.height(node.left), this.height(node.right) + 1);
        return rotate(node);
    }
    height(node) {
        if (node == null) return -1;
        return node.height;
    }
    rotate(node) {
        // left heavy 
        if (this.height(node.left) - this.height(node.right) > 1) {
            // LL case
            if (this.height(node.left.left) - this.height(node.left.right) > 0) {
                return (this.rightRotate(node));
            }
            // LR case
            if (this.height(node.left.left) - this.height(node.left.right) < 0) {
                node.left = this.leftRotate(node.left);
                return (this.rightRotate(node));
            }
        }
        // right heavy 
        if (node.left.height - node.right.height < -1) {
            // RR case
            if (this.height(node.left.left) - this.height(node.left.right) < 0) {
                return (this.leftRotate(node));
            }
            // RL case
            if (this.height(node.left.left) - this.height(node.left.right) > 0) {
                node.right = this.rightRotate(node.right);
                return (this.leftRotate(node));
            }
        }
    }
    rightRotate(p) {
        let c = p.left;
        let t = c.right;
        p.left = t;
        c.right = p;
        c.height = Math.max(this.height(c.left), this.height(c.right));
        p.height = Math.max(this.height(p.left), this.height(p.right));
        return c;
    }
    leftRotate(p) {
        let c = p.right;
        let t = c.left;
        p.right = t;
        c.left = p;
        c.height = Math.max(this.height(c.left), this.height(c.right));
        p.height = Math.max(this.height(p.left), this.height(p.right));
        return c;
    }
}
const tree = new Bst(2);
tree.insertNode(10);
tree.insertNode(2);
tree.insertNode(4);
tree.insertNode(50);
console.log(tree, "treeee");