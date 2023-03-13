const taskList = [{id: 1, name: "Ir al supermercado", done: true}, {id: 2, name: "Estudiar para la prueba", done: false}, {id: 3, name: "Regar las plantas", done: false}];
var taskList_doneF = [];
var taskList_doneT = [];

var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btnAdd");
var doneF = document.querySelector("#doneF");
var doneT = document.querySelector("#doneT");
var totalTasks = document.querySelector("#total_tasks");
var totalDone = document.querySelector("#total_done");
// var btnDone = document.querySelector("#btn_status");
// var btnDelete = document.querySelector("#btn_delete");
var html = "";
var i = 3;

function taskListRefresh () {
    doneF.innerHTML = "";
    doneT.innerHTML = "";
    taskList_doneT = taskList.filter(A => A.done == true);
    taskList_doneF = taskList.filter(A => A.done == false);
    html = "";
    taskList_doneT.forEach(A => {
        html +=
        `
            <div class="task">
                <div class="task_id">${A.id}</div>
                <div class="task_name">${A.name}</div>
                <div class="task_ok btn"><img src="assets/img/caja.png" class="btn_img" id="btn_status" alt="Terminado" onclick="changeTaskStatus(${A.id})"></div>
                <div class="task_delete btn"><img src="assets/img/basura.png" class="btn_img" id="btn_delete" alt="Eliminar" onclick="deleteTask(${A.id})"></div>
            </div>
        `
    });
    doneT.innerHTML = `<h3>Tareas terminadas</h3>${html}`;
    html = "";
    taskList_doneF.forEach(A => {
        html +=
        `
                <div class="task">
                    <div class="task_id">${A.id}</div>
                    <div class="task_name">${A.name}</div>
                    <div class="task_notOk btn"><img src="assets/img/cuadrado.png" class="btn_img" id="btn_status" alt="Pendiente" onclick="changeTaskStatus(${A.id})"></div>
                    <div class="task_delete btn"><img src="assets/img/basura.png" class="btn_img" id="btn_delete" alt="Eliminar" onclick="deleteTask(${A.id})"></div>
                </div>
        `
    });
    doneF.innerHTML = `<h3>Tareas pendientes</h3>${html}`;
    totalDone.innerHTML = taskList_doneT.length;
    totalTasks.innerHTML = taskList_doneF.length + taskList_doneT.length;
}

function addNewTask () {
    if (input.value == "") {
        alert("Está intentando crear una tarea sin descripción, ingrese algún texto para poder crear una tarea.");
    } else {
        i++;
        taskList.push({id: i, name: input.value, done: false});
        input.value = "";
        taskListRefresh();
    }
}

function deleteTask (id) {
    console.log(id);
    // taskListRefresh();
}

function changeTaskStatus (idT) {
    let indexChange = taskList.findIndex(T => T.id == idT);
    if (taskList[indexChange].done == false) {
        taskList[indexChange].done = true;
    } else {
        taskList[indexChange].done = false;
    }
    taskListRefresh();
}

window.addEventListener("load", taskListRefresh);
btnAdd.addEventListener("click", addNewTask);