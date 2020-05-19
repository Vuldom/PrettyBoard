let tasklist=document.querySelectorAll('.task-list');
let quantity=document.querySelectorAll('.quantity');
let createButton=document.querySelector('.create-button');
let userForm=document.forms.taskform;

createButton.addEventListener('click',addTask);

for(let i=0;i<tasklist.length;i++){
    setQuantity(tasklist[i],quantity[i]);
}

function setQuantity(tasklist,quantity){
    let counter=tasklist.getElementsByTagName('li').length;
    let text=document.createTextNode(counter);
    quantity.append(text);   
}

function addTask(){
    createElement(userForm.elements.taskname.value);
}

function createTask(userData){
    let element=document.createElement('li');
    let text=document.createTextNode(userData);
    element.append(text);
    tasklist[0].append(element);
}

