/*10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/

function isPrime(n) {
    for(let i=2; i<n; i++){
        if(n%i == 0) {
            return false;
        }
    }
    return true;
}

function nthPrime(n) {
    let count = 0;
    for(let j=2; j<1000000; j++){
        if(isPrime(j)){
            count++;
        }
        if(count === n){
            return j;
        }
    }
}

console.log(nthPrime(10001));