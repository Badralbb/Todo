const list = [];

const todo = document.getElementById("Todo-list");

function addTask() {
    const input = document.getElementById("input").value;
    const object = {status:"",name:input}
    list.push(object);

    render();
    
}
 
function checkbox(i){
    if(list[i].status == ""){
        list[i].status = "done"
    }
    else{
        list[i].status = "";
    }
    
    render();
}

function render() {
  let task = "";
  for (let i = 0; i < list.length; i++) {
    
    const oneTask = `<div class="todo-input">
                   
                    <div class="view-list">
                        <input onclick="checkbox(${i})" type="checkbox" class="checkbox" ${list[i].status === "done" ? "checked" : ""}>
                        <div id="view-list__text">${list[i].status === "done" ? `<s> ${list[i].name}</s>`: list[i].name}</div>
                    </div>
                    <div class="view-list__icon">
                        <span class="material-symbols-outlined" onclick="editTask(${i})">
                            edit
                        </span>
                        <span class="material-symbols-outlined" onclick="deleteTask(${i}),reserveCount()">
                            delete
                        </span>
                    </div>
                </div>`;
    task += oneTask;
  }
  todo.innerHTML = task;
}
render();
function deleteTask(position) {
  if (confirm("Are you sure?")) {
    list.splice(position, 1);
    render();
  }
}
function editTask(position) {
  const oldvalue = list[position].name;
  const name = prompt("edit task", oldvalue);
  if (name != null) {
    list[position].name = name;
    render();
  }
}
function placeholder() {
  // asuuh heseg
  document.getElementById("input").value = "";
}
function count() {
  const number = document.getElementById("list-header-count");
  let count;
  for (let i = 0; i < list.length; i++) {
    count = i + 1;
  }
  number.innerText = count;
}
function reserveCount() {
  const number = document.getElementById("list-header-count");
  let count;
  for (let i = list.length; i > list.length - 1; i--) {
    count = i;
  }
  number.innerText = count;
}

