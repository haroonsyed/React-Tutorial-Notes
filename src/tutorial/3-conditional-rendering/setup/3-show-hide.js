import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide
      </button>
      {/* Using short circuit with external functional component */}
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    //problem is toggling window will create a new listener and mem leak
    //This is why it is important to use useEffect correctly and return a cleanup function for anything you add to dom*/
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size : {size}</h2>
    </div>
  );
};

export default ShowHide;
