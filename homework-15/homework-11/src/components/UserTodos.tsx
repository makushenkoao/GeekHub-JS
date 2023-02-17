import React, {useState, useEffect, FC} from "react";
import { Link, useParams, useNavigate} from "react-router-dom";

interface ITodo {
    id: number;
    title: string;
}

const UserTodos: FC = () => {
    const [userTodos, setUserTodos] = useState<ITodo[]>([]);
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            .then(res => res.json())
            .then(json => setUserTodos(json as ITodo[]));
    }, []);

  return (
      <div style={{textAlign: 'center'}}>
          <button
              style={{marginTop: 20, padding: '5px 10px', cursor: 'pointer'}}
              onClick={() => navigate('/')}
          >Back</button>
          <button
              style={{marginTop: 20, padding: '5px 10px', cursor: 'pointer'}}
              onClick={() => navigate('/')}
          >Back to main page
          </button>
          <div className="UserTodos TodoList">
              {userTodos?.map(todo =>
                  <Link to={`todo/${todo.id}`} key={todo.id} className="Link">
                      <Todo todoTitle={todo.title} />
                  </Link>
              )}
          </div>
      </div>
  );
}

interface TodoProps {
    todoTitle: string
}

const Todo: FC<TodoProps> = ({ todoTitle }) => <div className="UserTodoItem">{todoTitle}</div>

export default UserTodos;