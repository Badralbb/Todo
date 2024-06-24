function run() {
    const input = document.getElementById("input");
    let output = document.getElementById("action");
    const action = `<div class="card" style="border-radius: 30px">
            <div class="card-content">
              <div class="content">${input.value}</div>
            </div>
          </div>`;
    output.innerHTML += action;
}
