const a = [-100,-200,-300,-400,-43242,-200,-135];
// let max = a[0];
// for(let i = 0; i < a.length; i++){
//     if(a[i] > max){
//      max = a[i];
//     }

// }
// console.log(max)
let min = a[0];
for(let i = 0; i < a.length; i++){
    if(a[i]<min){
        min = a[i];
    }
}
console.log(min)