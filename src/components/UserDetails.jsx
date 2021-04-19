import React, { useState, useEffect } from 'react';

const UserDetails = ({ match }) => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonResponse = await response.json();
      setUser(jsonResponse);
    }
    catch (err) {
      alert(err.message);
    }
  };
  
  useEffect(() => {
    getUser();    
  }, []);

  return (
    <div className="user-details">
      <ul>
        {user.filter(user => user.id == match.params.id).map(filteredUser => (
          <>
            <li>
              <h1 className="user-details-title">{filteredUser.name}'s details</h1>
            </li>
            <li>
              <strong>Name</strong>: {filteredUser.name}
            </li>

            <li>
              <strong>ID</strong>: {filteredUser.id}
            </li>

            <li>
              <strong>Username</strong>: {filteredUser.username}
            </li>

            <li>
              <strong>Email</strong>: {filteredUser.email}
            </li>

            <li>
              <strong>Address</strong>: <br />
              Street: {filteredUser.address.street}, Suite: {filteredUser.address.suite}, City: {filteredUser.address.city}, ZIP: {filteredUser.address.zipcode}
            </li>
          </>
        ))}
      </ul>
    </div>
  )
}

export default UserDetails;
