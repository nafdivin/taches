// const form=document.querySelector("#task-form");
// const taskList=document.querySelector(".collection");
// const taskInput= document.querySelector("#task");
// const taskPro=document.querySelector(".clear-tasks");

// form.addEventListener('submit', function addTask(e){
//     if(taskInput.value== "")
//     {
//      alert("SVP ajouter une Tache");
//     }
// const li =document.createElement("li");
// li.className= "collection-item";
// li.appendChild(document.createTextNode(taskInput.value));
// const link =document.createElement("a");
// link.className= "delete-item secondary-content";
// link.innerHTML = '<i class="fa fa-remove"></i>';
// li.appendChild(link);
// taskInput.value="";
// taskList.appendChild(li);
// e.preventDefault();
// link.addEventListener('click',function addLien(e){
//     li.remove();
//     e.preventDefault();
// });
// });
// taskPro.addEventListener('click', function(e){
// taskList.remove();
// e.preventDefault();
// });


// e.preventDefault();
// });
// console.log()
// let val=document.querySelector(".btn");
// val.addEventListener("click", function (e){
 
// });
const form = document.querySelector("#task-form");
const taskInput=document.querySelector("#task");
const taskList=document.querySelector(".collection");
const clearBtn=document.querySelector(".clear-tasks");
const filter=document.querySelector("#filter");

form.addEventListener("submit",(e) =>{
    if(taskInput.value === "")
    {
        taskInput.style.borderBottom="1px solid red";
        form.querySelectorAll("small").forEach((i)=>{
            i.classList.add("warning");
        });
    } else{
        const li=document.createElement("li");
        li.className="collecton-item";
        li.appendChild(document.createTextNode(taskInput.value));
        const link=document.createElement("a");
        link.className= 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    }
    taskInput.value="";
    storeTaskInLocalStorage(taskInput.value);
e.preventDefault();
});

function storeTaskInLocalStorage(inputData){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks=[];
    
    } else{
        tasks =JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(inputData);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
document.addEventListener("DOMContentLoaded", (e)=> {
   
    if(localStorage.getItem("tasks") === null){
        tasks =[];
    
    } else{
        tasks =JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach((i) =>{
        const li=document.createElement("li");
        li.className="collecton-item";
        li.appendChild(document.createTextNode(i));
        const link=document.createElement("a");
        link.className= "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    });
});
// document.addEventListener("DOMContentLoaded", function (){
//     taskInput.value="";
// });