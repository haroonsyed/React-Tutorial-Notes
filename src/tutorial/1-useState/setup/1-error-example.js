import React from "react";

const ErrorExample = () => {
  let title = "random title;";

  //The error is that the h2 is not being told to re-render

  const handleClick = () => {
    title = "Delta'd Title";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
