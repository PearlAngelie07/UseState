import React, { useState } from "react";

const Counter = ({ toggleCounter, show }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const goBack = () => {
    toggleCounter(false);
  };
  const counterStyle = {
    fontSize: "200px",
    marginTop:"50px",
  };

  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
    fontSize:"50",
    margin: "5px 0",
    marginLeft:"10px",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const backButtonStyle = {
    backgroundColor: "#3377ff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  };


  return (
    show && (
      <div>
        <div style={counterStyle}>{count}</div>
        <div style={buttonContainerStyle}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button style={buttonStyle} onClick={decrement}>
            -1
          </button>
          <button style={buttonStyle} onClick={increment}>
            +1
          </button>
          </div>
          <button style={backButtonStyle} onClick={goBack}>
            Back
          </button>
        </div>
      </div>
    )
  );
};

export default Counter;
