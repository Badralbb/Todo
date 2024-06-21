function generateStars(numberOfStars){
let stars = "";
for(let i = 0; i < numberOfStars; i++){
stars = stars + "* ";
}
return stars;
}
function input(input){
  input = Number(document.getElementById("input").value);
  return input;
}
function space(n, space){
  let empty = "";
  for(let i = n; i > space; i--){
    empty = empty + " ";
  }
  return empty;
}
function action(n){
  let result = "";
  for(let i = 0; i <= n; i++){
    result = result + space(n, i);
    result =result + generateStars(i);
    result = result + "\n";
  }
  return result;
}
function output(output){
  document.getElementById("output").innerText = output;
  return output;
}
function run(){
  const n = input();
  const triangle = action(n);
  output(triangle);
}
