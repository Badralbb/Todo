const n = 10;
const a = [0,1];

for(let i = 0; i < n - 2; i++){
    a.length = a.length + 1;
    a[a.length - 1] = a[i] + a[i + 1]; 
}
console.log(a)