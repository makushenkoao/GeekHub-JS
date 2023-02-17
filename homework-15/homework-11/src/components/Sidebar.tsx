import React, {FC} from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface UserProps{name: string}

const User = ({ name }: UserProps) => <div className="User">{name}</div>;

const Sidebar: FC = () => {
    const [users, setUsers] = useState<[{id: number, name: string}]>();

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
                    <Link key={user.id} to={`/user/${user.id}`} className="Link">
                        <User name={user.name} />
                    </Link>
                )}
            </div>
        </div >
    );
}

export default Sidebar;