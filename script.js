let quantities=document.querySelectorAll('.task-list');

function getTasks(tasklist){
    let counter=tasklist.getElementsByTagName('li').length;
    let text=document.createTextNode(counter);
    return text;
}

console.log(getTasks(quantities[0]));