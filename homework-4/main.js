const addButton = document.getElementById('addTask');
const inputTask = document.getElementById('inputTask');
const tasksList = document.getElementById('tasksList')
const sortAlphabetButton = document.getElementById('sortAlphabet');
const sortTimeButton = document.getElementById('sortTime')
let ascendingSort = false;
let tasks = [];

addButton.addEventListener('click', addTask)
inputTask.addEventListener('keypress', event => {
    if (event.keyCode === 13) addTask()
})
window.addEventListener('DOMContentLoaded', () => {
    inputTask.focus()
})
sortAlphabetButton.addEventListener('click', sortListByAlphabet);
sortTimeButton.addEventListener('click', sortListByTime);

function createNewElem(task) {
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
    deleteButton.innerHTML = '<img src="./img/delete.svg" alt="done">';
    editButton.innerHTML = '<img src="./img/edit.svg" alt="done">';

    listItem.className = 'todo-list-item draggable'
    span.className = 'task-title'
    div.className = 'task-buttons';
    divTime.className = 'time';
    doneButton.className = ('task-btn btn-done btn-click');
    deleteButton.className = ('task-btn btn-delete btn-click');
    editButton.className = ('task-btn btn-edit btn-click');

    attr.value = 'true';

    listItem.setAttributeNode(attr);
    span.innerHTML = task;

    listItem.appendChild(span);
    div.appendChild(divTime)
    div.appendChild(doneButton)
    div.appendChild(deleteButton)
    div.appendChild(editButton)
    listItem.appendChild(div)

    addEventsDragAndDrop(listItem)

    return listItem
}

function addTask() {
    if (inputTask.value !== '') {
        const listItem = createNewElem(inputTask.value);
        const span = listItem.querySelector('span')
        tasksList.appendChild(listItem);
        bindTaskEvents(listItem)
        inputTask.focus();
        inputTask.value = '';
        tasks.push(span.textContent)

    }
}

function deleteTask(event) {
    const li = event.target.closest('.todo-list-item');
    li.remove()

}

function doneTask(event) {
    const li = event.target.closest('.todo-list-item');
    li.classList.toggle('done-task')
}

function editTask(event) {
    const listItem = event.target.closest('.todo-list-item');
    const span = listItem.querySelector('span')
    const attr = document.createAttribute('contentEditable');
    attr.value = 'true';
    span.setAttributeNode(attr);
    span.focus();
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
    const editButton =  listItem.querySelector('button.btn-edit')
    doneButton.onclick = doneTask;
    deleteButton.onclick = deleteTask;
    editButton.onclick = editTask
}

function sortListByAlphabet() {
    let i = 0;
    let sortedList;
    ascendingSort = !ascendingSort;
    if (ascendingSort) sortedList = tasks.sort((a, b) => a > b ? 1 : -1);
    else sortedList = tasks.sort((a, b) => a > b ? 1 : -1).reverse();
    const listItem = document.querySelectorAll('.todo-list-item');
    listItem.forEach(item => {
        let span = item.querySelector('span')
        span.innerHTML = sortedList[i++];
    })
}

function sortListByTime() {
    let i = 0;
    let sortedList;
    sortedList = tasks.reverse();
    console.log(sortedList)
    const listItem = document.querySelectorAll('.todo-list-item');
    listItem.forEach(item => {
        let span = item.querySelector('span')
        span.innerHTML = sortedList[i++];
    })
}

function dragStart(event) {
    dragSrcEl = this;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter(event) {
    this.classList.add('over');
}

function dragLeave(event) {
    event.stopPropagation();
    this.classList.remove('over');
}

function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    return false;
}

function dragDrop(event) {
    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = event.dataTransfer.getData('text/html');
    }
    bindTaskEvents(this)
    return false;
}

function dragEnd(event) {
    bindTaskEvents(this)
    let listItems = document.querySelectorAll('.draggable');
    [].forEach.call(listItems, function(item) {
        item.classList.remove('over');
    });
}

function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
}

let listItems = document.querySelectorAll('.draggable');
[].forEach.call(listItems, function(item) {
    addEventsDragAndDrop(item);
});

