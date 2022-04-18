const todoList = [];

const orderlist = document.getElementById('ordered-list');
let editIndex = null;

const addTodoItem = () => {
    const textInput = document.getElementById("todoInput");
    if(!textInput.value) return // don't add todo if input is empty
    todoList.push(textInput.value)
    displayTodos()
    textInput.value = ''
 }

 const onEditClick = (index) => {
     if(index || index === 0){
         editIndex = index
     } else {
        editTodoItem(editIndex)
        editIndex = null;
     }
     displayTodos()
 }

 const editTodoItem = (index) => {
     const editInput = document.getElementById(`editInput${index}`);
     todoList.splice(index, 1, editInput.value)
     displayTodos()
 }

 const deleteTodoItem = (index) => {
    todoList.splice(index, 1)
    displayTodos()
 }


const displayTodos = () => {
    orderlist.innerHTML = ''
    todoList.forEach((todo, index) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'listItem');

        const listItemsDiv = document.createElement('div');
        listItemsDiv.setAttribute('class', 'listItemsDiv');

        const div = document.createElement('div');
        div.setAttribute('class', 'actionBtnWrapper');

        const span = document.createElement('span')



        const editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'actionBtn editBtn');
       
        
        if(index === editIndex) {
            editBtn.innerHTML = "Save";
            editBtn.onclick = () => onEditClick()

            const editInput = document.createElement('input')
            editInput.setAttribute('id', `editInput${index}`)
            editInput.value = todo;
            listItemsDiv.appendChild(editInput)
        } else {
            span.textContent = todo;
            listItemsDiv.appendChild(span)
            editBtn.innerHTML = "Edit";
            editBtn.onclick = () => onEditClick(index)
        }       
       
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = "Delete";
        deleteBtn.setAttribute('class', 'actionBtn deleteBtn');
        deleteBtn.onclick = () => deleteTodoItem(index)
        

        div.appendChild(editBtn);
        div.appendChild(deleteBtn);

        listItemsDiv.appendChild(div)

        li.appendChild(listItemsDiv)
        
        orderlist.appendChild(li);
       
    });
}

 