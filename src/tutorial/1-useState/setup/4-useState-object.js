import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "Peter Parker",
    age: 18,
    message: "Friendly Neighborhood Spiderman!",
  });
  console.log(person);
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button
        className="btn"
        onClick={() => {
          setPerson({
            //Spread operator to keep the rest of the object
            ...person,
            message: "Changed message!",
          });
        }}
      >
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
