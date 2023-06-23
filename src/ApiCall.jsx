import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('https://randomuser.me/api/?results=50')
            .then((response) => setUsers(response.data.results))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container">
            <h1 className="heading">User Names</h1>
            <ul className="user-list">
                {users.map((user) => (
                    <li key={user.login.uuid} className="user-name">{`${user.name.first} ${user.name.last}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default ApiCall;
