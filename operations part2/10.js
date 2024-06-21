let a = 3, b = 2, c = 6;
if(a > b && a > c && b > c){
console.log(a, b, c)
}
if(a > c && a > b && c > b){
    console.log(a, c, b)
}
if(b > a && b > c && a > c){
    console.log(b , a , c)
}
if(b > c && c > a && b > c){
    console.log(b , c , a)
}
if(c > a && c > b && a > b){
    console.log(c, a, b)
}
if(c > b && c > a && b > a){
    console.log(c, b, a)
}