import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text, setText] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  return (
    <>
      <h1>{text || "john doe"} </h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        toggle error
      </button>
      {
        /* Only displays h1 if a error is true  */
        isError && <h1>Error...</h1>
      }
      {isError ? <p>Press the button to remove the error!</p> : null}
    </>
  );
};

export default ShortCircuit;
