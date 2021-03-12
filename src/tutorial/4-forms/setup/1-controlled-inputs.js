import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [people, setPeople] = React.useState([]);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    //Remember broswer refreshes, we need to override that
    e.preventDefault();
    const person = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      email: email,
    };
    setPeople((people) => {
      return [...people, person];
    });
    //Reset inputs
    setName("");
    setEmail("");
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            {/* We have connected the value of person and our state, but that doesn't let us change the state as we type... */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person) => {
          const { id, name, email } = person;
          return <h4 key={id}>{`${name} with email ${email}`}</h4>;
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
