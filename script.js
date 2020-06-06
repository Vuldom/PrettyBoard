let Tasks={
    todo: [`Miramon Nuevo`, `Rick Reilly`, `Woddy Paige`],
    inprogress:[`11`, `Neo`, `Morpheus`],
    done:[]
};
let userForm=document.forms.taskform;

let tasklist=document.querySelectorAll('.task-list');
let quantity=document.querySelectorAll('.quantity');
let createButton=document.querySelector('.create-button');
let clearButton=document.querySelectorAll('.clear-button');
let removeButton=document.querySelector('.remove');

let todoClear=clearButton[0];
let inprogressClear=clearButton[1];
let doneClear=clearButton[2];

createButton.addEventListener('click',addTask);
todoClear.addEventListener('click',clearTodo);
inprogressClear.addEventListener('click',deleteAll);
doneClear.addEventListener('click',deleteAll);
removeButton.addEventListener('click',deleteTask);

for(let i=0;i<tasklist.length;i++){
    setQuantity(tasklist[i],quantity[i]);
}

function setQuantity(tasklist,quantity){
    let counter=tasklist.getElementsByTagName('li').length;
    let text=document.createTextNode(counter);
    quantity.append(text);   
}

function addTask(){
    if(userForm.elements.taskname.value){
    Tasks.todo.push(userForm.elements.taskname.value);
    localStorage.setItem('tasks',JSON.stringify(Tasks));
    buildTodo();
    }
    else(console.log("Input task name"))
}

function deleteAll(){
    console.log('deleted');
}
function deleteTask(){
    console.log('deleted');
}
function buildTaskList(tasks){
    clearTodo();
    for(let task of tasks){
        console.log(task);
        let element=document.createElement('li');
        let text=document.createTextNode(task);
        element.append(text);
        tasklist[0].append(element); 
    }
}

function buildTodo(){
    let storedTasks=localStorage.getItem('tasks');
    let storedObj=JSON.parse(storedTasks);
    buildTaskList(storedObj.todo);
}

function clearTodo(){
    tasklist[0].innerHTML="";
}