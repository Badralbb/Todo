

const trash = document.getElementsByClassName("todo-input");

let n = 1;

let j = 1;


function output() {


  const input = document.getElementById("input").value;
  let output = document.getElementById("Todo-list");


  const texts = `<div class="todo-input"  id="${n}">
                     
      <div class="view-list" id="fall${j}">
          <input id="check" type="checkbox">
          <div id="view-list__text">${input}</div>
      </div>
      <div class="view-list__icon">
          <span onclick="editTask(${j})" class="material-symbols-outlined">
              edit
          </span>
          <span class="material-symbols-outlined delete " onclick="dlt(${n}),reserveCount()">
              delete
          </span>
      </div>
      </div>`;
  output.innerHTML += texts;
  n++;
  j++;

}
function dlt(n) {
  if (confirm("Are you sure?")) {
    document.getElementById(`${n}`).remove();
  }


}
function editTask(j) {
 let oldvalue = document.getElementById("view-list__text").value;
  const name = prompt("editTask",oldvalue);
  let valuetrue = document.getElementById(`fall${j}`);
  
  if (name != null) {
    valuetrue.innerHTML = `<input id="check" type="checkbox"><div class="${j}" id="view-list__text">${name}</div>`
  }
}




function reserveCount() {
  for (let i = listCount.length; i > listCount.length - 1; i--) {
    count = i;
  }
  let result = document.getElementById("list-header-count");
  result.innerHTML = count;
}

let listCount = document.getElementsByClassName("todo-input");
function run() {
  let count;

  for (let i = 1; i <= listCount.length; i++) {
    count = i;
  }
  let result = document.getElementById("list-header-count");
  result.innerHTML = count;
  //    return result;
}

function button() {
  // const input = document.getElementById("input").innerHTML;
  const myInput = document.getElementById("input")
  myInput.value = ''
  // input += `placeholder="what's next?"`;
}
