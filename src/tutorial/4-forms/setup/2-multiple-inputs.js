import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  //Instead of using a different state for each input, use an object for all of those fields
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  //Forward all changes to here, use name to determine what changed
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    //Update given field value
    setPerson((person) => {
      return { ...person, [field]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { ...person, id: Math.floor(Math.random * 10000) };
    setPeople((people) => {
      return [...people, newPerson];
    });
    //Reset fields
    setPerson({ name: "", email: "", age: "" });
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              id="name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person, index) => {
          const { id, name, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
