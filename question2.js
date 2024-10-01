class Node {
  //constructor receives a value and potentially left and right pointers
  constructor(value, left = null, right = null) {
    //left and right nodes are null by default
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const isSameTree = (tree1, tree2) => {
  // So both our trees current node is null
  // This mean's they both reached the end of the tree
  // at the same time without error
  if (!tree1 && !tree2) {
    return true;
  }

  // One of the pointers are null when another is not
  // This mean's one of our pointers has traversed to a correct node
  // but another has reached the end of the list too early and thus
  // cannot be a valid tree
  if (!tree1 || !tree2) {
    return false;
  }

  // As we have moved nodes
  // Are they the same value?
  if (tree1.value != tree2.value) {
    return false;
  }

  // Get both left nodes
  // We will traverse the left nodes in a DFS fashion
  // to be able to compare both left nodes at the same time
  // So we move left at the same time on both trees.
  const good_lefts = isSameTree(tree1.left, tree2.left);

  // Get both right nodes
  // We will traverse the right nodes in a DFS fashion
  // to be able to compare both right nodes at the same time
  // So we move right at the same time on both trees.
  const good_rights = isSameTree(tree1.right, tree2.right);

  // So are both sides good?
  return good_lefts && good_rights;
};

module.exports = { Node, isSameTree };
