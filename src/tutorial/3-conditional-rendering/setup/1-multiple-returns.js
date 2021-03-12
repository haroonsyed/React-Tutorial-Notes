import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarsonsss";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [user, setUser] = React.useState("default user");

  React.useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => {
        //.login is username
        setUser(user.login);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, []);

  //Simply use a condition
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  //Default case
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );

  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
