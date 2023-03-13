const tareas = [{id: 1, name: "Ir al supermercado", done: true}, {id: 2, name: "Estudiar para la prueba", done: false}, {id: 3, name: "Regar las plantas", done: false}];

var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btnAdd");
var doneF = document.querySelector("#doneF");
var doneT = document.querySelector("#doneT");
var totalTasks = document.querySelector("#total_tasks");
var totalDone = document.querySelector("#total_done");
var btnDone = document.querySelector("#btn_status");
var btnDelete = document.querySelector("#btn_delete");
var html = [];
