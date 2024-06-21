// const arrayOfNumbers = [43, 56, 23, 89, 90, 99, 652, 15, 290, 11];
// let sum = 0;

// for(let i = 0; i < arrayOfNumbers.length; i++){
//     let a = arrayOfNumbers[i];
//     sum = sum + a;
    
// }
// console.log(sum);

// console.log(Math.max(...arrayOfNumbers));
// console.log(Math.min(...arrayOfNumbers));
// arrayOfNumbers.unshift(1);
// console.log(arrayOfNumbers[0]);
// arrayOfNumbers.push(2);
// console.log(arrayOfNumbers.push(2));
// let a = 0;
// let b = 0;
// for(let i = 0; i < arrayOfNumbers.length; i++){
//     a = arrayOfNumbers[i];
//     if(a % 2 != 0){
//         b = b + 1;
//     }

// }
// console.log(b)

const arrayOfNumbers = [43, 56, 23, 89, 90, 99, 652, 15, 290, 11];
const tegsh = arrayOfNumbers.filter(function(a){
    return a % 2 == 0;
});
console.log(tegsh);

const sondgoi = arrayOfNumbers.filter(function(b){
    return b % 2 != 0;
});
console.log(sondgoi);