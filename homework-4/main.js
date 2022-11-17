function toDoListApp() {
    const form = document.getElementById('js-form');
    const inputTask = document.getElementById('js-inputTask');
    const tasksList = document.getElementById('js-tasksList');
    const sortAlphabetButton = document.getElementById('js-sortAlphabet');
    const sortTimeButton = document.getElementById('js-sortTime');
    let tasks = [];
    let condition = false;

    form.addEventListener('submit', addTask)
    window.addEventListener('DOMContentLoaded', () => {
        inputTask.focus()
        getList()
    })
    sortAlphabetButton.addEventListener('click', sortListByAlphabet);
    sortTimeButton.addEventListener('click', sortListByTime);

    function createTaskElem(task) {
        const listItem = document.createElement('li');
        const span = document.createElement('span');
        const div = document.createElement('div')
        const divTime = document.createElement('div')
        const doneButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        const attr = document.createAttribute('draggable');

        divTime.innerHTML = setTime()
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

        attr.value = 'true';
        listItem.setAttributeNode(attr);
        span.innerHTML = task;

        listItem.appendChild(span);
        div.appendChild(divTime)
        div.appendChild(doneButton)
        div.appendChild(deleteButton)
        div.appendChild(editButton)
        listItem.appendChild(div)

        return listItem
    }

    function addTask(event) {
        event.preventDefault();
        const spanList = document.querySelectorAll('span');
        spanList.forEach(item => {
            if (item.innerText === inputTask.value) {
                alert(new Error('You have this task'));
                inputTask.value = '';
            }
        })
        if (inputTask.value === '') return;
        const newTask = {
            text: inputTask.value,
            done: false,
            createdAd: Date.now(),
            hoursCreatedAt: new Date().getHours(),
            minutesCreatedAt: new Date().getMinutes(),
        };
        const index = tasks.length
        const listItem = createTaskElem(newTask.text);
        listItem.setAttribute('data-task-index', index)
        tasks.push(newTask)
        tasksList.appendChild(listItem);
        inputTask.focus();
        inputTask.value = '';
        bindTaskEvents(listItem)
        saveList(tasks)

    }

    function saveList(arr) {
        localStorage.setItem('todos', JSON.stringify(arr));
    }

    function getList() {
        let c = 0
        let localData = localStorage.getItem('todos');
        if (localData !== null && localData !== '') tasks = JSON.parse(localData)
        for (let item of tasks) {
            const listItem = createTaskElem(item.text, tasks);
            const divTime = listItem.querySelector('div.time');
            divTime.innerHTML = `${item.hoursCreatedAt}:${item.minutesCreatedAt}`
            if (item.done === true) listItem.classList.add('done-task')
            listItem.setAttribute('data-task-index', c++)
            tasksList.appendChild(listItem);
            bindTaskEvents(listItem)

        }
    }

    function deleteTask(event) {
        let c = 0
        const li = event.target.closest('.todo-list-item');
        li.remove()
        const currentName = li.firstChild.textContent
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].text === currentName) tasks.splice(i, 1);
        }
        saveList(tasks)
        const listItem = document.querySelectorAll('.js-drag')
        listItem.forEach(item => {
            item.setAttribute('data-task-index', c++)
        })
    }

    function doneTask(event) {
        const li = event.target.closest('.todo-list-item');
        li.classList.toggle('done-task')
        const currentName = li.firstChild.textContent
        for (let item of tasks) {
            if (item.text === currentName) item.done = !item.done
        }
        saveList(tasks)
    }

    function editTask(event) {
        condition = !condition;
        const listItem = event.target.closest('.todo-list-item');
        const span = listItem.querySelector('span');
        const divTime = listItem.querySelector('div.time')
        const i = listItem.getAttribute('data-task-index');
        const btn = listItem.querySelector('button.btn-edit');
        if (condition) {
            span.setAttribute('contentEditable', true);
            btn.innerHTML = '<img src="./img/save.svg" alt="save">';
        } else {
            span.removeAttribute('contentEditable');
            btn.innerHTML = '<img src="./img/edit.svg" alt="done">';
            tasks[i].text = span.textContent;
            divTime.innerHTML = setTime()
            tasks[i].hoursCreatedAt = new Date().getHours();
            tasks[i].minutesCreatedAt = new Date().getMinutes();
            tasks[i].createdAd = Date.now();
        }
        span.focus();
        saveList(tasks);
    }

    function setTime() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes}`
    }

    function bindTaskEvents(listItem) {
        const doneButton = listItem.querySelector('button.btn-done');
        const deleteButton = listItem.querySelector('button.btn-delete');
        const editButton = listItem.querySelector('button.btn-edit')
        doneButton.onclick = doneTask;
        deleteButton.onclick = deleteTask;
        editButton.onclick = editTask
    }

    function sortListByAlphabet() {
        condition = !condition;
        let sorted;
        let items = document.querySelectorAll('.js-drag');
        if (condition) {
            tasks.sort((a, b) => a.text > b.text ? 1 : -1);
            sorted = [...items].sort((a, b) => {
                a = a.innerHTML.slice(2);
                b = b.innerHTML.slice(2);
                if (a > b) return 1;
                if (a < b) return -1;
                return 0;
            })
        } else {
            tasks.reverse();
            sorted = [...items].reverse()
        }
        tasksList.innerHTML = '';
        for (const li of sorted) {
            tasksList.appendChild(li);
        }
        saveList(tasks);
    }

    function sortListByTime() {
        let c = 0;
        condition = !condition;
        let sorted;
        if (condition) {
            sorted = tasks.sort((a, b) => a.createdAd > b.createdAd ? 1 : -1);
        } else {
            sorted = tasks.reverse();
        }
        tasksList.innerHTML = '';
        for (const li of sorted) {
            const listItem = createTaskElem(li.text);
            listItem.setAttribute('data-task-index', c++);
            const divTime = listItem.querySelector('div.time');
            divTime.innerHTML = `${li.hoursCreatedAt}:${li.minutesCreatedAt}`;
            if (li.done === true) listItem.classList.add('done-task');
            bindTaskEvents(listItem);
            tasksList.appendChild(listItem);
        }
        saveList(tasks)
    }

    function dragStart(event) {
        event.target.classList.add('over');
    }

    function dragEnd(event) {
        event.target.classList.remove('over');
    }

    function dragOver(event) {
        event.preventDefault();
        const activeElem = tasksList.querySelector('.over');
        const currentElem = event.target;
        const move = activeElem !== currentElem && currentElem.classList.contains('js-drag');
        if (!move) return;
        const nextElement = (currentElem === activeElem.nextElementSibling) ? currentElem.nextElementSibling : currentElem;
        tasksList.insertBefore(activeElem, nextElement);
    }


    function addEventsDragAndDrop(elem) {
        elem.addEventListener('dragstart', dragStart);
        elem.addEventListener('dragover', dragOver);
        elem.addEventListener('dragend', dragEnd);
    }

    addEventsDragAndDrop(tasksList)
}

toDoListApp()




