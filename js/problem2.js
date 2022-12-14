/*Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

function Fibonacci(limit){
    let sum = 0;
    let a = 0;
    let b = 1;
    let term = 0;
    while(sum < limit) {
        term = a + b;
        a = b;
        b = term;
        if(term % 2 == 0){
            sum += term;
        }
    }
    return sum;
}

console.log(Fibonacci(4000000));