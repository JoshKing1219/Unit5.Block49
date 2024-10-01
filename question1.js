class Node {
  //constructor receives a value
  constructor(value) {
    //left and right nodes are null by default
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const inOrder = (root) => {
  //initialize a stack
  const stack = [];
  //initialize the node to go through the tree
  let currentNode = root;

  //while the current node exists
  // or the stack has nodes
  while (currentNode || stack.length) {
    while (currentNode) {
      //add the current node to the stack
      stack.push(currentNode);
      //increment our node pointer to the left
      currentNode = currentNode.left;
    }

    //once there is no more nodes to the left
    //remove the last element from our stack
    const node = stack.pop();
    //console log the value
    console.log(node.value);
    //set the current node to the right node
    currentNode = node.right;
  }
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
inOrder(root);
