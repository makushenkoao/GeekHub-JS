import React, {FC} from "react";
import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";

const TodoInfo: FC  = ()=> {
    const [todo, setTodo] = useState<{[key: string]: string} | undefined>();
    const { id } = useParams<{id: string}>()
    const navigate = useNavigate()
    const path = window.location.pathname.split('/')[2]

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${path}/todos?id=${id}`)
        .then(res => res.json())
        .then((json: [{}]) => {
          setTodo(json[0])
        })
    }, [todo]);

    return (
        <div style={{textAlign: 'center'}}>
            <button
              style={{marginTop: 20, padding: '5px 10px', cursor: 'pointer'}}
              onClick={() => navigate(`/user/${path}`)}
            >Back
            </button>
            <button
                style={{marginTop: 20, padding: '5px 10px', cursor: 'pointer'}}
                onClick={() => navigate('/')}
            >Back to main page
            </button>
            {todo &&
              <div className="TodoInfo">
                <h2 className="TodoInfo-header">{todo.title}</h2>
                <div className="TodoInfo-description">
                  <span>User id: {todo.userId}</span>
                  <span>Todo id: {todo.id}</span>
                  <span>Completed: {todo.completed + ''}</span>
                </div>
              </div>
            }
        </div>
    );
}

export default TodoInfo;