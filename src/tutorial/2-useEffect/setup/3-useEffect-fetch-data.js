import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = React.useState([]);

  const fetchUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(() => {
      return users;
    });
  };

  React.useEffect(() => {
    //Perform a fetch request
    //Do not re-render or it iwll be infinite loop
    fetchUsers();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
