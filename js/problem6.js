/*Sum square difference

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/

function sumOfSquares(n) {
    let sum = 0;
    for(let i=1; i<=n; i++){
        let sqr = i*i;
        sum += sqr;
    }
    return sum;
}

function squareOfSums(n) {
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum * sum;
}

function sumSquareDiff(num) {
    let sum = sumOfSquares(num);
    let square = squareOfSums(num);
    return square - sum;
}

console.log(sumSquareDiff(100));