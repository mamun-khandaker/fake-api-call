import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonResponse = await response.json();
      setUsers(jsonResponse);
      // console.log(users[1].name);
    };
    getUsers();
  }, []);

  return (
    <div className="users">
      <h1 className="users-list">User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Name: <NavLink to={`/users/${user.id}`}>{user.name}</NavLink><br />
            ID: {user.id}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users;

