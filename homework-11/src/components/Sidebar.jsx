import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUsers(json))
  }, []);

  return (
    <div className="Sidebar">
      <h2 className="Sidebar-header">Users</h2>
      <div className="Sidebar-users">
        {users?.map((user) =>
          <Link key={user.id} to={`${user.id}`} className="Link">
            <User name={user.name} />
          </Link>
        )}
      </div>
    </div >
  );
}

const User = ({ name }) => <div className="User">{name}</div>

export default Sidebar;