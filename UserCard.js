import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://dummyjson.com/users';
const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios
      .get(URL)
      .then((res) => setUsers(res.data.users))
      .then(() => setLoader(false))
      .catch((err) => console.log(err));
  }, []);

  if (loader) {
    return <h1 style={{ paddingTop: '50px' }}>Loading.. please wait</h1>;
  }
  return (
    <div className="users-data">
      {users.map((eachUser) => {
        const { id, image, firstName, email, address, phone } = eachUser;
        return (
          <div key={id} className="each-user">
            <img src={image} alt={firstName} />
            <h1>{firstName}</h1>
            <h3>{email}</h3>
            <p>{address.city}</p>
            <p>{phone}</p>
          </div>
        );
      })}
    </div>
  );
};
export default UserCard;
