import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [todos, setTodos] = useState([]);

  async function filterTodos(status) {
    if (status === 'all') setTodos(allTodos);
    else if (status === 'title') setTodos([...todos].sort((a, b) => a.title > b.title ? 1 : -1));
    else setTodos([...allTodos].filter(todo => todo.completed === status));
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(json => {
        setAllTodos(json)
        setTodos(json)
      })
  }, []);

  return (
    <div className="TodoList">
      <div className="filter-buttons">
        <Link to="?filter=all">
          <button onClick={() => filterTodos('all')}>All</button>
        </Link>
        <Link to="?filter=title">
          <button onClick={() => filterTodos('title')}>Alphabetic</button>
        </Link>
        <Link to="?filter=completed">
          <button onClick={() => filterTodos(true)}>Completed</button>
        </Link>
        <Link to="?filter=uncompleted">
          <button onClick={() => filterTodos(false)}>Uncompleted</button>
        </Link>
      </div>

      <div className="todos">
        {todos?.map((todo) => <TodoItem key={todo.id} id={todo.id} isCompleted={todo.completed} todoTitle={todo.title} />)}
      </div>
    </div>
  );
}

const TodoItem = ({ todoTitle, id, isCompleted }) => {
  return (
    <div className="TodoItem">
      <h3 className="TodoItem-header">{todoTitle}</h3>
      <div>id: {id}</div>
      <div>Completed: {isCompleted + ''}</div>
    </div>
  );
}

export default TodoList;