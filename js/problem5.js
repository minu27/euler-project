/*Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/

function smallestMultiple() {
    for(let i=20;i<=1000000000;i++){
        let flag = 'true';
        for(let j=2;j<=20;j++){
            if(i%j !== 0){
                flag = 'false';
            }
        }
        if(flag === 'true') {
            return i;
        }
    }
}

console.log(smallestMultiple());