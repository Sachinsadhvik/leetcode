/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function helper (root, number) {
    if (root === null) {
        return 0;
    }
    const left = helper(root.left, number); // can provide
    const right = helper(root.right, number); // can provide
    const val = left + right + root.val - 1;
    number[0] += Math.abs(left) + Math.abs(right);
    return val;
    
}
​
var distributeCoins = function(root) {
    // bottom up
    const number = [0];
    helper (root, number);
    return number[0];
};
