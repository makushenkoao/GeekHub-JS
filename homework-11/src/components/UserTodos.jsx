import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const UserTodos = () => {
  const [userTodos, setUserTodos] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then(res => res.json())
      .then(json => setUserTodos(json));
  }, []);

  return (
    <div className="UserTodos TodoList">
      {userTodos?.map(todo =>
        <Link to={`${todo.id}`} key={todo.id} className="Link">
          <Todo todoTitle={todo.title} />
        </Link>
      )}
    </div>
  );
}

const Todo = ({ todoTitle }) => <div className="UserTodoItem">{todoTitle}</div>

export default UserTodos;