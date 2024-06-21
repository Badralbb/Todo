function input(){
    const input = document.getElementById("input").value;
    const n = Number(input);
    return n;
}
function action(n){
    let sum = 0;
    for(i = 1; i <= n; i++){
        sum = sum + i;
    }
    return sum;
}
function output(print){
    document.getElementById("output").innerText = print;
}
function run(){
    const n = input();
    const sum = action(n);
    output(sum);
}
