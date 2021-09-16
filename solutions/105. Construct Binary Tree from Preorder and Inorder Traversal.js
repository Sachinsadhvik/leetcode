/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let inOrderIndexLookup = new Map();
    
    //since inorder does not contain duplicates, we will have one entry for each node;
    for(let i = 0, len = inorder.length; i < len; i++) {
        inOrderIndexLookup.set(inorder[i], i);
    }
    
    function helper(preStart, preEnd, inStart, inEnd) {
        if(preStart > preEnd || inStart > inEnd) return null;
        
        let value = preorder[preStart];
        let index = inOrderIndexLookup.get(value);
        let leftTreeNodeCount = index - inStart;
        let root = new TreeNode(value);
​
        root.left = helper(preStart + 1, preStart + leftTreeNodeCount, inStart, index - 1);
        root.right = helper(preStart + leftTreeNodeCount + 1, preEnd, index + 1, inEnd);
        return root;
    }    
    
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
