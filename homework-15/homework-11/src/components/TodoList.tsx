import React, {FC} from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ITodo {
    id: number;
    title: string;
    completed: boolean
}

const TodoList: FC = () => {
    const [allTodos, setAllTodos] = useState<ITodo[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    async function filterTodos(status: boolean | string) {
        if (status === 'all') setTodos(allTodos);
        else if (status === 'title') setTodos([...todos].sort((a: ITodo, b: ITodo) => a.title > b.title ? 1 : -1));
        else setTodos([...allTodos].filter((todo: ITodo ) => todo.completed === status));
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res: Response) => res.json())
            .then((json: ITodo[]) => {
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

interface TodoItemProps {
    todoTitle: string,
    id: number,
    isCompleted: boolean
}

const TodoItem: FC<TodoItemProps> = ({ todoTitle, id, isCompleted }) => {
  return (
    <div className="TodoItem">
      <h3 className="TodoItem-header">{todoTitle}</h3>
      <div>id: {id}</div>
      <div>Completed: {isCompleted + ''}</div>
    </div>
  );
}

export default TodoList;