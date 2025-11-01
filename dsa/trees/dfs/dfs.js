/**
 * Interview Question: Depth-First Search (DFS) in a tree
 * company: Accenture
 * date: 25-9-25
 * difficulty: Medium
 */

/**
 * Depth-First Search (DFS) implementation for tree traversal.
 * This function traverses a tree structure and returns the values in DFS order.
 * pre-order traversal is used here (visit node before its children).
 *
 * Time Complexity: O(n) where n is the number of nodes in the tree.
 * Space Complexity: O(h) where h is the height of the tree (due to recursion stack).
 *  * expected output: ["A", "B", "D", "E", "C", "F", "G"]
 * @param {Object} node - The root node of the tree.
 * @returns {Array} - An array of values in DFS order.
 *
 * Example tree structure:
 *         A
 *       /   \
 *     B     C
 *   / \   / \
 * D  E  F  G
 * The DFS traversal order for this tree would be: A, B, D, E, C, F, G
 * The tree is represented as a nested object structure.
 *
 */
const tree = {
  value: "A",
  children: [
    {
      value: "B",
      children: [
        {
          value: "D",
          children: [],
        },
        {
          value: "E",
          children: [],
        },
      ],
    },
    {
      value: "C",
      children: [
        {
          value: "F",
          children: [],
        },
        {
          value: "G",
          children: [],
        },
      ],
    },
  ],
};

function depthFirstTraversal(node) {
  const result = [];

  function dfs(current) {
    if (!current) return;
    result.push(current.value); // visit the node
    for (let child of current.children) {
      dfs(child); // recurse for each child
    }
  }

  dfs(node);
  return result;
}

const result = depthFirstTraversal(tree);
console.log(result); // ["A", "B", "D", "E", "C", "F", "G"]
