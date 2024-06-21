function getNumberValueFromInput(){
    const inputString = document.getElementById("input").value;
    const n = Number(inputString);
    return n;
}
function sumOfNumbers(n){
  let star = "* ";
  let space =" ";
  for(let i = 0; i <= n; i++){
    for(let j = 0; j <= n; j++){
        if(star === "* "){
            space = "   ";
            star = star + space;
        }

    }
    console.log(star);
  }
}

function print(output){
    document.getElementById("output").innerText = output;
}
function run(){
    const n = getNumberValueFromInput();
    const sum = sumOfNumbers(n);
    print(sum);
}