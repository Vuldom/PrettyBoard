let tasklist=document.querySelectorAll('.task-list');
let quantity=document.querySelectorAll('.quantity');


for(let i=0;i<tasklist.length;i++){
    setQuantity(tasklist[i],quantity[i]);
}
function setQuantity(tasklist,quantity){
    let counter=tasklist.getElementsByTagName('li').length;
    let text=document.createTextNode(counter);
    quantity.append(text);   
}