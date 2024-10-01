const { Node, isSameTree } = require("./question2");
const { TreeNode, countNodes } = require("./question3");
const { TreeNode: td, searchBottomLeftValue } = require("./question4");

describe("q2 - isSameTree", () => {
  it("passes test 1", () => {
    const l1 = new Node(1, new Node(2), new Node(3));
    const l2 = new Node(1, new Node(2), new Node(3));
    expect(isSameTree(l1, l2)).toBe(true);
  });

  it("passes test 2", () => {
    const l1 = new Node(1, new Node(2));
    const l2 = new Node(1, null, new Node(2));
    expect(isSameTree(l1, l2)).toBe(false);
  });
});

describe("q3 - countNodes", () => {
  it("passes test 1", () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(11);
    root.right = new TreeNode(12);
    root.left.left = new TreeNode(13);
    root.left.right = new TreeNode(14);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(16);
    expect(countNodes(root)).toBe(7);
  });
});

describe("q4 - searchBottomLeftValue", () => {
  it("passes test 1", () => {
    const root = new td(2);
    root.right = new td(3);
    root.left = new td(1);
    root.left.left = new td(4);
    root.right.left = new td(5);
    root.right.left.left = new td(6);

    expect(searchBottomLeftValue(root)).toBe(6);
  });
});
