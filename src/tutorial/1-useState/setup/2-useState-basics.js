import React, { useState } from "react";

const UseStateBasics = () => {
  //So in order to update our rendered component, we need to tell react to rerender through useState
  //useState returns an array
  //The first argument is the state, the second is the function to handle that state
  //The handler will update the component when called

  // console.log(useState("hello there"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  //Common convention is to name handler as setX
  const [text, setText] = React.useState("random title");

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button
        className="btn"
        onClick={() => {
          //Toggle the header
          if (text == "random title") {
            setText("Changed Title");
          } else {
            setText("random title");
          }
        }}
      >
        Change Header
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
