const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDesc = document.getElementById('task-desc');
const taskDeadline = document.getElementById('task-deadline');
const taskList = document.getElementById('task-list');


document.addEventListener('DOMContentLoaded', loadTasks);


taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    const taskDescription = taskDesc.value.trim();
    const taskDueDate = taskDeadline.value;

   
    if (taskText === '' || taskDueDate === '') return;

    
    addTask(taskText, taskDescription, taskDueDate);
    saveTasks();

    
    taskInput.value = '';
    taskDesc.value = '';
    taskDeadline.value = '';
});


function addTask(text, description, dueDate) {
    const li = document.createElement('li');

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    taskContent.innerHTML = `
        <strong>${text}</strong><br>
        ${description}<br>
        <em>Termín: ${formatDate(dueDate)}</em>
    `;
    taskContent.addEventListener('click', function () {
        editTask(li, text, description, dueDate);
    });

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '✖';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function () {
        li.remove();
        saveTasks();
    });

    li.appendChild(taskContent);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}


function editTask(li, text, description, dueDate) {
    taskInput.value = text;
    taskDesc.value = description;
    taskDeadline.value = dueDate;

    
    li.remove();
    saveTasks();
}


function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('#task-list li')).map(li => {
        const content = li.querySelector('.task-content');
        const [taskName, taskDescription, taskDueDate] = content.innerHTML.split('<br>');
        return {
            name: taskName.replace('<strong>', '').replace('</strong>', '').trim(),
            description: taskDescription.trim(),
            dueDate: taskDueDate.replace('<em>Termín: ', '').replace('</em>', '').trim(),
        };
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTask(task.name, task.description, task.dueDate));
}


function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('cs-CZ', options);
}
