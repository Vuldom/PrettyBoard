let Tasks={
    todo: [`Miramon Nuevo`, `Rick Reilly`, `Woddy Paige`],
    inprogress:[`11`, `Neo`, `Morpheus`],
    done:[`something`]
};

let userForm=document.forms.taskform;
let storedTasks=localStorage.getItem('tasks');
let storedObj=JSON.parse(storedTasks);

let tasklist=document.querySelectorAll('.task-list');

let createButton=document.querySelector('.create-button');
let clearButton=document.querySelectorAll('.clear-button');
let removeButton=document.querySelector('.remove');

let todoClear=clearButton[0];
let inprogressClear=clearButton[1];
let doneClear=clearButton[2];

createButton.addEventListener('click',addNewTask);
todoClear.addEventListener('click',deleteTodo);
inprogressClear.addEventListener('click',deleteInprogress);
doneClear.addEventListener('click',deleteDone);

function deleteTodo(){
   Tasks.todo.splice(0, Tasks.todo.length);
   localStorage.setItem('tasks',JSON.stringify(Tasks));
   clearTasklist(tasklist[0]);
   buildTaskList(storedObj.todo,tasklist[0]);
}
function deleteInprogress(){
    Tasks.inprogress.splice(0, Tasks.inprogress.length);
    localStorage.setItem('tasks',JSON.stringify(Tasks));
    clearTasklist(tasklist[1]);
    buildTaskList(storedObj.inprogress,tasklist[1]);
 }
 function deleteDone(){
    Tasks.done.splice(0, Tasks.done.length);
    localStorage.setItem('tasks',JSON.stringify(Tasks));
    clearTasklist(tasklist[2]);
    buildTaskList(storedObj.done,tasklist[2]);
 }

function setQuantity(tasklist){
    let counter=tasklist.getElementsByTagName('li').length;
    let text=document.createTextNode(counter);
    let quantity=document.querySelectorAll('.quantity');
}

function addNewTask(){
    if(userForm.elements.taskname.value){
    Tasks.todo.push(userForm.elements.taskname.value);
    localStorage.setItem('tasks',JSON.stringify(Tasks));
    clearTasklist(tasklist[0]);
    buildTaskList(storedObj.todo,tasklist[0]);
    addListButtons();
    }
    else(console.log("Input task name"))
}

function deleteAll(){
    console.log('deleted');
}
function deleteTask(){
    console.log('deleted');
}
function buildTaskList(tasks, tasklist){

    for(let task of tasks){
        let element=document.createElement('li');
        let text=document.createTextNode(task);
        element.append(text);
        tasklist.append(element);
    }
}

function addListButtons(){
    let lists=document.querySelectorAll('li');
    for(let li of lists){
        let divWithButtons=document.createElement('div');
        divWithButtons.classList.add('list-buttons');
        li.append(divWithButtons);
    }
    let allDivWithButtons = document.querySelectorAll('.list-buttons');
    for(let d of allDivWithButtons){
        let divMove=document.createElement('div');
        let divRemove=document.createElement('div');
        divMove.classList.add('move');
        divRemove.classList.add('remove');
        d.append(divMove);
        d.append(divRemove);
    }
}

function clearTasklist(tasklist){
    tasklist.innerHTML="";
}

Tasks=storedObj;
buildTaskList(storedObj.todo,tasklist[0]);
buildTaskList(storedObj.inprogress,tasklist[1]);
buildTaskList(storedObj.done,tasklist[2]);
setQuantity(tasklist[0]);
addListButtons();