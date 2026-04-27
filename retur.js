const taskInput = document.getElementById("object");
const addBut = document.getElementById("btn");
const taskList = document.getElementById("taskList");

function addTask() {
  let task = taskInput.value.trim();
  if (task) {
    createTaskElement(task);
    taskInput.value = "";
  } else {
    alert("the input is empty");
  }
}
addBut.addEventListener("click", addTask);

function createTaskElement(task) {
  const listen = document.createElement("li");
  listen.textContent = task;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "حذف";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.backgroundColor = "red";
  // 3. برمجة زر الحذف ليمسح العنصر عند الضغط عليه
  deleteBtn.onclick = function () {
    listen.remove();
  };

  // 4. إضافة الزر داخل الـ li
  listen.appendChild(deleteBtn);

  // 5. إضافة الـ li (listen) إلى القائمة الأصلية
  // التصحيح هنا: استخدمنا listen بدلاً من li
  taskList.appendChild(listen);
}
