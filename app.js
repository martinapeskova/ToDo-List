// Třída Task představuje jeden úkol
class Task {
    constructor(name, description, dueDate) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
    }
}

// Třída TaskManager spravuje všechny úkoly
class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.taskList = document.getElementById('task-list');
        this.initEventListeners();
        this.renderTasks();
    }

    // Přidání posluchačů událostí
    initEventListeners() {
        document.getElementById('task-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addTask();
        });
    }

    // Načtení úkolů z LocalStorage
    loadTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    // Uložení úkolů do LocalStorage
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // Přidání nového úkolu
    addTask() {
        const taskInput = document.getElementById('task-input').value.trim();
        const taskDesc = document.getElementById('task-desc').value.trim();
        const taskDeadline = document.getElementById('task-deadline').value;

        if (!taskInput || !taskDeadline) {
            alert("Vyplňte název úkolu a termín!");
            return;
        }

        const newTask = new Task(taskInput, taskDesc, taskDeadline);
        this.tasks.push(newTask);
        this.saveTasks();
        this.renderTasks();

        document.getElementById('task-form').reset();
    }

    // Odstranění úkolu
    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.saveTasks();
        this.renderTasks();
    }

    // Vykreslení úkolů na stránce
    renderTasks() {
        this.taskList.innerHTML = ''; // Vyčištění seznamu

        this.tasks.forEach((task, index) => {
            const li = document.createElement('li');

            const taskContent = document.createElement('div');
            taskContent.classList.add('task-content');
            taskContent.innerHTML = `<strong>${task.name}</strong><br>${task.description}<br><em>Termín: ${this.formatDate(task.dueDate)}</em>`;
            taskContent.addEventListener('click', () => this.editTask(index));

            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = '✖';
            deleteBtn.classList.add('delete');
            deleteBtn.addEventListener('click', () => this.deleteTask(index));

            li.appendChild(taskContent);
            li.appendChild(deleteBtn);
            this.taskList.appendChild(li);
        });
    }

    // Úprava úkolu
    editTask(index) {
        const task = this.tasks[index];

        document.getElementById('task-input').value = task.name;
        document.getElementById('task-desc').value = task.description;
        document.getElementById('task-deadline').value = task.dueDate;

        this.deleteTask(index); // Po načtení do formuláře se úkol odstraní a po úpravě se znovu uloží
    }

    // Formátování data do českého formátu (DD. MM. YYYY)
    formatDate(date) {
        const d = new Date(date);
        return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}`;
    }
}

// Inicializace správce úkolů
document.addEventListener('DOMContentLoaded', () => new TaskManager());
