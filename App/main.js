const theBtn1 = document.getElementById('oneBtn');
const theinput1 = document.getElementById('one');
const theBtn2 = document.getElementById('twoBtn');
const theinput2 = document.getElementById('two');
const theBtn3 = document.getElementById('threeBtn');
const theinput3 = document.getElementById('three');
const theBtn4 = document.getElementById('foorBtn');
const theinput4 = document.getElementById('foor');
const theBtn5 = document.getElementById('fiveBtn');
const theinput5 = document.getElementById('five');
const theBtn6 = document.getElementById('sixBtn');
const theinput6 = document.getElementById('six');
const theBtn7 = document.getElementById('sevenBtn');
const theinput7 = document.getElementById('seven');

function addTask() {
  var taskInput = document.getElementById("task");
  var taskText = taskInput.value;

  if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
  }

  var ul = document.getElementById("taskList");
  var li = document.createElement("div");

  li.innerHTML = `
    <h1 style="border: 0rem;">${taskText}</h1>
      <div class="grid-container">
      <div class="grid-item">
          <input id="one" type="text">
          <button id="oneBtn">Add</button>
      </div>
      <div class="grid-item">
        <input id="two" type="text">
        <button id="twoBtn">Add</button>
      </div>
      <div class="grid-item">
          <input id="three" type="text">
          <button id="threeBtn">Add</button>
      </div>
      <div class="grid-item">
          <input id="foor" type="text">
          <button id="foorBtn">Add</button>
      </div>
      <div class="grid-item">
          <input id="five" type="text">
          <button id="fiveBtn">Add</button>
      </div>
      <div class="grid-item">
          <input id="six" type="text">
          <button id="sixBtn">Add</button>
      </div>
      <div class="grid-item">
          <input id="seven" type="text">
          <button id="sevenBtn">Add</button>
      </div>
    </div>
  `;

  ul.appendChild(li);
  taskInput.value = "";
}

theBtn1.addEventListener('click', function() {
  theBtn1.parentElement.innerHTML theinput1.value
})

function deleteTask(button) {
  var li = button.parentElement;
  var ul = li.parentElement;
  li.style.background = "red"
}
