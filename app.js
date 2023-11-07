var addBtn=document.getElementById("add-task")
var taskInput=document.getElementById("task")
var taskList=document.getElementById("tasks")

addBtn.addEventListener("click",function(){
    var task=taskInput.value
    addTask(task)//method
    taskInput.value= ""
}
)
//this is method function call the method

function addTask(task){//take the attribute
    var li=document.createElement("li")//create list element
    li.innerHTML=task//inner list
    taskList.appendChild(li)//appent child list
}
