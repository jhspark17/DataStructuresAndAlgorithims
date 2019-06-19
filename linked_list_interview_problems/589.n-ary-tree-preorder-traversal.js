/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (root.children.length === 0) return root;
  let res = [];

  for (let i = 0; i < root.children.length; i++) {
    let node = head.children[i];
    node = preorder(node);
    res.push
  }


};

