function input(input){
    input = Number(document.getElementById("input").value);
    return input;
}

function output(output){
    document.getElementById("output").innerText = output;
}

function run(){
    const n = input();
    const triangle = action(n);
    output(triangle);
}

function generateStars(count){
    let stars = "";
    for(let i = 0; i < count; i++){
        stars = stars + "* ";
    }
    return stars;
}

function generateSpaces(count){
    let spaces = "";
    for(let i = 1; i <= count; i++){
        spaces = spaces + "-";
    }
    return spaces;
}


function action(n){
    let result = "";    

for(let i = 1; i <= n; i++){
    result = result + generateSpaces(n - i);

    if(i === 1 || i === 2 || i === n){
        result = result + generateStars(i);
    }
    else{
        result = result + "*";
        result = result + generateSpaces(2 * i - 3);
        result = result + "*";
    }
    result = result + "\n";
  
}
console.log(result);
}

