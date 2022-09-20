/*Special Pythagorean triplet

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

for(let a = 1; a < 500; a++){
    for(let b = a; b < 1000; b++){
        let c = Math.sqrt(a * a + b * b);
        if(c > b && Number.isInteger(c) && a + b + c == 1000){
            console.log(a * b * c);
        }
    }
  }