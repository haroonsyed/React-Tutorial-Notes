import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = React.useState(window.innerWidth);

  const displayWidth = () => {
    setSize(() => {
      return window.innerWidth;
    });
  };

  //Causes displayed width to update as window is resized
  React.useEffect(() => {
    //We set the setSize after any resize event
    window.addEventListener("resize", displayWidth);

    //However, the useEffect function is called each time the listener fires, which causes a memory leak
    //To fix this, we can use a cleanup function as below:
    return () => {
      console.log(`Cleaning up...`);
      window.removeEventListener("resize", displayWidth);
    };
  });

  return (
    <>
      <h1>Window Width:</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
