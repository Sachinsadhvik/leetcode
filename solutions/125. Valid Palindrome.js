/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    regex=/[a-zA-Z0-9]/
 reversed=s.toLowerCase().split("").filter(x=> regex.test(x))
 return reversed.join("")==reversed.reverse().join("")
};
