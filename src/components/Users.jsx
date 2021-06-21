import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Users = () => {

  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false)

  const getUsers = async () => {
    try {
      setLoader(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonResponse = await response.json();
      setUsers(jsonResponse);
      setLoader(false);
    }
    catch (err) {
      alert(err.message);
      setLoader(false);
    }
  };
  
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users">
      <h1 className="users-list">User List</h1>
      <ul>
        {loader ? 
          <div className="loader"></div>
          :
          users.map(user => (
            <li key={user.id}>
              <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Users;

