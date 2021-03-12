import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    console.log("Called useEffect");
    //Runs when anything causes a re-render
    //Although you cannot place conditionals to encapsulate useEffect, you can use it inside
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  //Note how useEffect comes after this log
  console.log("Rendered component.");

  //You can have multiple useEffects
  React.useEffect(() => {
    console.log(`Running useEffect after intial render`);
  }, []);

  return (
    <>
      <h1>{value}</h1>
      {/* Notice how clicking the button causes a re-render, and the call of useEffect code */}
      <button className="btn" onClick={() => setValue((value) => value + 1)}>
        Increase Value
      </button>
    </>
  );
};

export default UseEffectBasics;
