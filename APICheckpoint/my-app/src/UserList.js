import React, { useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = React.useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="user-list">
      <h2>Users</h2>
      {listOfUsers.length === 0 ? (
        <p className="no-users">No users found</p>
      ) : (
        <ul>
          {listOfUsers.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList; 