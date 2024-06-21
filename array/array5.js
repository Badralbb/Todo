const a = [1];
const n = 10;
let b = 1;
for(let i = 0; i < n; i++){
    if(i === 0){
        a.push(a[0]);
        console.log(a);
    } else{
        for(let j = 1; j <= i; j++){
            a[j] = a[j] + b;
            b = a[j] - b;
        }
        a.push(a[0]);
        console.log(a);
    }
}

