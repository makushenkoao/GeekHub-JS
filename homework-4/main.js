function toDoListApp() {
    const form = document.getElementById('js-form');
    const inputTask = document.getElementById('js-inputTask');
    const tasksList = document.getElementById('js-tasksList');
    const sortAlphabetButton = document.getElementById('js-sortAlphabet');
    const sortTimeButton = document.getElementById('js-sortTime');

    let tasks = [];

    if (localStorage.getItem('todos')) {
        tasks = JSON.parse(localStorage.getItem('todos'));
    }

    document.addEventListener('DOMContentLoaded', () => {
        renderTasks(tasks)
        inputTask.focus()
    })

    form.addEventListener('submit', addTask)
    sortAlphabetButton.addEventListener('click', sortListByAlphabet);
    sortTimeButton.addEventListener('click', sortListByTime);

    function createTaskElem(obj, index) {
        const listItem = document.createElement('li');
        const span = document.createElement('span');
        const div = document.createElement('div')
        const divTime = document.createElement('div')
        const doneButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');

        span.innerHTML = obj.text;
        divTime.innerHTML = setTaskCreationDate(obj)
        doneButton.innerHTML = '<img src="./img/done.svg" alt="done">';
        deleteButton.innerHTML = '<img src="./img/delete.svg" alt="delete">';
        editButton.innerHTML = '<img src="./img/edit.svg" alt="edit">';
        listItem.className = 'todo-list-item js-drag';

        span.className = 'task-title'
        div.className = 'task-buttons';
        divTime.className = 'time';
        doneButton.className = 'task-btn btn-done btn-click';
        deleteButton.className = 'task-btn btn-delete btn-click';
        editButton.className = 'task-btn btn-edit btn-click';

        listItem.setAttribute('draggable', true);
        listItem.setAttribute('data-task-index', index)

        listItem.appendChild(span);
        div.appendChild(divTime)
        div.appendChild(doneButton)
        div.appendChild(deleteButton)
        div.appendChild(editButton)
        listItem.appendChild(div)

        if (obj.done === true) listItem.classList.add('done-task')
        else listItem.classList.remove('done-tasks')

        return listItem
    }

    function addTask(event) {
        event.preventDefault();
        if (inputTask.value === '') return;
        tasks.push({
            text: inputTask.value,
            done: false,
            createdAt: Date.now(),
        })
        saveList(tasks);
        renderTasks(tasks);
        inputTask.value = ''
    }

    function saveList(arr) {
        localStorage.setItem('todos', JSON.stringify(arr));
    }

    function renderTasks(arr) {
        tasksList.innerHTML = '';
        arr.forEach((item, index) => {
            const listItem = createTaskElem(item, index);
            tasksList.appendChild(listItem);
            bindTaskEvents(listItem);
            addEventListeners();
        })
    }

    function setTaskCreationDate(obj) {
        return new Date(obj.createdAt).toLocaleString();
    }

    function doneTask(event) {
        const index = event.target.closest('.todo-list-item').getAttribute('data-task-index');
        tasks[index].done = !tasks[index].done;
        saveList(tasks);
        renderTasks(tasks);
    }

    function deleteTask(event) {
        const index = event.target.closest('.todo-list-item').getAttribute('data-task-index');
        tasks.splice(index, 1);
        saveList(tasks);
        renderTasks(tasks);
    }

    function editTask(event) {
        const index = event.target.closest('.todo-list-item').getAttribute('data-task-index');
        const span = event.target.closest('.todo-list-item').querySelector('span')
        const editButton = event.target.closest('.todo-list-item').querySelector('.btn-edit')
        if (!span.getAttribute('contentEditable')) {
            span.setAttribute('contentEditable', true);
            span.focus();
            editButton.innerHTML = '<img src="./img/save.svg" alt="edit">';
        } else {
            span.removeAttribute('contentEditable');
            tasks[index].text = span.textContent;
            tasks[index].createdAt = Date.now();
            renderTasks(tasks);
            saveList(tasks);
        }
    }

    function bindTaskEvents(listItem) {
        listItem.querySelector('button.btn-done').onclick = doneTask;
        listItem.querySelector('button.btn-delete').onclick = deleteTask;
        listItem.querySelector('button.btn-edit').onclick = editTask;
    }

    function sortListByAlphabet() {
        if (tasks.every((item, i) => i === 0 || item.text >= tasks[i - 1].text)) tasks.sort((a, b) => a.text > b.text ? -1 : 1);
        else tasks.sort((a, b) => a.text > b.text ? 1 : -1);
        renderTasks(tasks);
    }


    function sortListByTime() {
        if (tasks.every((item, i) => i === 0 || item.createdAt >= tasks[i - 1].createdAt)) tasks.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1);
        else tasks.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1);
        renderTasks(tasks);
    }

    let startIndex;

    function dragStart() {
        startIndex = this.getAttribute('data-task-index');
    }

    function dragEnter(event) {
        event.preventDefault();
        const endIndex = this.getAttribute('data-task-index')
        if (startIndex !== endIndex) {
            const source = tasks[startIndex];
            tasks.splice(startIndex, 1);
            tasks.splice(endIndex, 0, source);
            startIndex = endIndex
        }
    }

    function dragOver(event) {
        event.preventDefault();
        saveList(tasks);
        renderTasks(tasks);
    }

    function addEventListeners() {
        document.querySelectorAll('.js-drag').forEach(item => {
            item.addEventListener('dragstart', dragStart);
            item.addEventListener('dragover', dragOver);
            item.addEventListener('dragenter', dragEnter);
        });
    }
}

toDoListApp();