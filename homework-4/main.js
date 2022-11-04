const addBtn = document.getElementById('toDoListAddBtn');
const addMessage = document.getElementById('toDoListInput');
const todoListUl = document.getElementById('ToDoListUl');


// активно - светлый, закрытый - темный
// добавить список через appendChild, creatElement, удать задачу через перебор массива и добавления класса close по клику
// вычеркнуть задание - перебо массива, клил - добавление класса cross(text-decoration: line-through)
// изменть текст - ?
// добавить время - через метод new Date
// сортировка по алфавиту или времени
// сортировка самостоятельно - Drag’n’Drop