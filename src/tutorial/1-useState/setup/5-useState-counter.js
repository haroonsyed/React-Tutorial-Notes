import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = React.useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      //Why do we pass a function into setvalue?
      //Well, the value is updated async, so it won't be incremented between the timout (as it will use the value before increasing)
      //The reason is that react will batch the setStates together instead of queeuing them, but with a function call it queues them
      //With a functional variant, we force the value to update, as we tell react to pass down the existing value into prevValue before returning
      setValue((prevValue) => {
        //This return is required!
        return prevValue + 1;
      });
    }, 500);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>

        <button
          className="btn"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          Decrease
        </button>

        <button
          className="btn"
          onClick={() => {
            setValue(0);
          }}
        >
          Reset
        </button>

        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>Complex counter</h2>
        <h1>{value}</h1>

        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
