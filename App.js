import React, { useState } from "react";
import FlashLight from "./source/components/FlashLight";
import Counter from "./source/components/Counter";
import "./source/components/Styles.css";

function App() {
  const [showFlashLight, setShowFlashLight] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

  const toggleFlashLight = (show) => {
    setShowFlashLight(show);
    setShowCounter(false);
  };

  const toggleCounter = (show) => {
    setShowCounter(show);
    setShowFlashLight(false);
  };

  return (
    <div className="App">
      <div className="top-center">
      <button className={`toggle-button ${showFlashLight || showCounter ? "disabled" : ""}`}
      onClick={() => toggleFlashLight(!showFlashLight)}
        disabled={showCounter || showFlashLight}>
          
        {showFlashLight ? "FLASHLIGHT" : "FLASHLIGHT"}
      </button>
      <button className={`toggle-button ${showFlashLight || showCounter ? "disabled" : ""}`}
       onClick={() => toggleCounter(!showCounter)}
        disabled={showFlashLight || showCounter}>
        {showCounter ? "COUNTER" : "COUNTER"}
      </button>
      </div>
      <FlashLight toggleFlashLight={toggleFlashLight} show={showFlashLight} />
      <Counter toggleCounter={toggleCounter} show={showCounter} />
    </div>
  );
}

export default App;
