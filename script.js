// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add Task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    ${taskText}
    <button class="delete-btn">Delete</button>
  `;

  // Mark task as complete on click
  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Delete task
  const deleteBtn = taskItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    taskItem.remove();
  });

  taskList.appendChild(taskItem);
  taskInput.value = ''; // Clear input
});
