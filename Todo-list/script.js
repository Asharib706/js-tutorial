// Retrieve todo_list from local storage if it exists
const storedTodoList = localStorage.getItem('todo_list');
const todo_list = storedTodoList ? JSON.parse(storedTodoList) : [];

function showList() {
  const listContainer = document.querySelector(".list-container");
  listContainer.innerHTML = ''; // Clear previous content
  for (let i = 0; i < todo_list.length; i++) {
    listContainer.innerHTML += `
      <div class="list-item">${todo_list[i].name}</div>
      <div class="list-item">${todo_list[i].date}</div>
      <button class="delete-button" onclick="deleteTodo(${i})">Delete</button>
    `;
  }
}

function addToList(){
  const name = document.querySelector('.input-title').value;
  const date = document.querySelector('.input-date').value;
  if (name && date) { // Only add if both fields are filled
    todo_list.push({name, date});
    saveTodoList(); // Save todo_list to local storage
    showList();
    document.querySelector('.input-title').value='';
    document.querySelector('.input-date').value='';
  } else {
    alert("Please fill in both the title and date fields.");
  }
}

function deleteTodo(index) {
  todo_list.splice(index, 1);
  saveTodoList(); // Save todo_list to local storage
  showList();
}

// Function to save todo_list to local storage
function saveTodoList() {
  localStorage.setItem('todo_list', JSON.stringify(todo_list));
}

showList(); // Initial rendering
