let inputBox = document.querySelector('input');
let addbtn = document.querySelector('.add');
let tasks = document.querySelector('.tasks_container');
addbtn.onclick = ()=>{
    if(inputBox.value == ""){
        alert("Write some to does");
    }
    else{
       let task = `<p class="todo">${inputBox.value}</p><button class="edit"></button><button class="delete"></button>`;
       let li = document.createElement('li');
       tasks.appendChild(li);
       li.innerHTML = task;
    }
    inputBox.value = "";
    saveData();
}
tasks.addEventListener('click',(e)=>{
    if(inputBox.value==""){
        if(e.target.classList=="edit"){
            inputBox.value = e.target.parentElement.innerText;
            e.target.parentElement.remove();
        }
        else if(e.target.classList=="delete"){
           e.target.parentElement.remove();
        }
        else if(e.target.classList=="todo"){
            e.target.parentElement.classList.toggle('complete');
        }     
        else
            return false  
    }
    saveData();
});

function saveData(){
    localStorage.setItem('data',tasks.innerHTML);
}
function showdata(){
    tasks.innerHTML = localStorage.getItem('data');
}
showdata();

