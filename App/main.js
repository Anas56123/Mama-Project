'use-strict'
// i"s"
let i = 0;

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
      <div onclick="ChangeColor('on')" class="grid-item" id="on">
          <input id="one" type="text">
          <button onclick="OOPInput('one')" id="oneBtn">Add</button>
      </div>
      <div onclick="ChangeColor('tw')" class="grid-item" id="tw">
        <input id="two" type="text">
        <button onclick="OOPInput('two')" id="twoBtn">Add</button>
      </div>
      <div onclick="ChangeColor('th')" class="grid-item" id="th">
          <input id="three" type="text">
          <button onclick="OOPInput('three')" id="threeBtn">Add</button>
      </div>
      <div onclick="ChangeColor('fo')" class="grid-item" id="fo">
          <input id="foor" type="text">
          <button onclick="OOPInput('foor')" id="foorBtn">Add</button>
      </div>
      <div onclick="ChangeColor('fi')" class="grid-item" id="fi">
          <input id="five" type="text">
          <button onclick="OOPInput('five')" id="fiveBtn">Add</button>
      </div>
      <div onclick="ChangeColor('si')" class="grid-item" id="si">
          <input id="six" type="text">
          <button onclick="OOPInput('six')" id="sixBtn">Add</button>
      </div>
      <div onclick="ChangeColor('se')" class="grid-item" id="se">
          <input id="seven" type="text">
          <button onclick="OOPInput('seven')" id="sevenBtn">Add</button>
      </div>
    </div>
  `;

  ul.appendChild(li);
  taskInput.value = "";
}

function OOPInput(num) {
  const theinput = document.getElementById(num);
  theinput.parentElement.innerHTML = theinput.value;
  setTimeout(iadd, 1000)
};

function iadd() {
  i++
}

function ChangeColor(lnum) {
  if(i >= 1) {
    document.getElementById(lnum).style.background = "#63FF7C";
    i--
  } else {
    return;
  }
}

function deleteTask(button) {
  var li = button.parentElement;
  var ul = li.parentElement;
  li.style.background = "red";
}
