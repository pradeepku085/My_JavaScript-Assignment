let count = 0;

document.querySelector("#addTodo").addEventListener("click", function(){
  let todoInput = document.querySelector('#todo_input').value;
  if(todoInput.length===0){
    alert("Please enter a task");
  }else{
    document.querySelector('.todos').innerHTML += `
    <p key=${count}>
      <span class="task">
        ${todoInput}
      </span>
    </p>
    `;
    count++;
    let currentTask = document.querySelectorAll('.task');
    for(let i=0; i<currentTask.length; i++){
      currentTask[i].addEventListener('click',function(){
        this.parentNode.remove();
      })
    }
  }
})