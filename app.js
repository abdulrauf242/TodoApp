var input = document.getElementById('inp')
var BTN = document.getElementById('todoList')
arr = [];
function addTodo(){
    if(input.value === ''){
        alert('please enter an item');
    } else {
        // Create a new todo item
        const todoItem = document.createElement('todoList');
        todoItem.textContent = input.value;arr.push(inp.value)
            inp.value = ''
            


        // Add the new todo item to the list
        const todoList = document.getElementById('inp');
        todoList.appendChild(todoItem);

        // Clear the input field
        input.value = '';
    }
}

