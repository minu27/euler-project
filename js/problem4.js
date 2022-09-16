/*Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.*/

function isPalindrome(n) {
    return n.toString() == n.toString().split("").reverse().join("");
}

function largestPalindrome() {
    let vals = [];
    for(let i=999;i>100;i--){
        for(let j=999;j>100;j--){
            let val = i*j;
            if(isPalindrome(val)){
                vals.push(i*j);
            }
        }
    }
    return Math.max.apply(Math, vals);
}

console.log(largestPalindrome());