import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TodoInfo = () => {
  const [todo, setTodo] = useState();
  const { id } = useParams()
  const path = window.location.pathname.split('/')[1]

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${path}/todos?id=${id}`)
      .then(res => res.json())
      .then(json => setTodo(json[0]))
  }, []);

  return (
    todo &&
    <div className="TodoInfo">
      <h2 className="TodoInfo-header">{todo.title}</h2>
      <div className="TodoInfo-description">
        <span>User id: {todo.userId}</span>
        <span>Todo id: {todo.id}</span>
        <span>Completed: {todo.completed + ''}</span>
      </div>
    </div>
  );
}

export default TodoInfo;