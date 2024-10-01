class TreeNode {
  //constructor receives a value
  constructor(value, left = null, right = null) {
    //left and right nodes are null by default
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Function to get the left height of
// the binary tree
function left_height(node) {
  let ht = 0;
  while (node) {
    ht++;
    //keep increasing our node's pointer until we reach the end
    node = node.left;
  }

  // Return the left height obtained
  return ht;
}

// Function to get the right height
// of the binary tree
function right_height(node) {
  let ht = 0;
  while (node) {
    ht++;
    //keep increasing our node's pointer until we reach the end
    node = node.right;
  }

  // Return the right height obtained
  return ht;
}

const countNodes = (root) => {
  // Base Case
  if (root === null) {
    return 0;
  }

  // Find the left height and the
  // right heights
  let lh = left_height(root);
  let rh = right_height(root);

  // If left and right heights are
  // equal return 2^height -1
  if (lh === rh) {
    return Math.pow(2, lh) - 1;
  }

  // Otherwise, recursive call
  // adding count for root
  return 1 + countNodes(root.left) + countNodes(root.right);
};

module.exports = { TreeNode, countNodes };
