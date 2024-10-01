class TreeNode {
  //constructor receives a value
  constructor(value, left = null, right = null) {
    //left and right nodes are null by default
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const searchBottomLeftValue = (root) => {
  //create a queue with the root node
  const queue = [root];
  let leftmost = null;

  //while we have a node in our queue
  while (queue.length > 0) {
    //remove the first element from our queue
    leftmost = queue.shift();

    //check for a right node
    if (leftmost.right) {
      queue.push(leftmost.right);
    }
    //check for a left node
    if (leftmost.left) {
      queue.push(leftmost.left);
    }
  }

  return leftmost.value;
};

module.exports = { TreeNode, searchBottomLeftValue };
