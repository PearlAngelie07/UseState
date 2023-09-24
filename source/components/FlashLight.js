import React, { useState } from "react";

const flashlightOnImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAADj4+Po6OixsbFgYGD6+vomJibOzs7y8vL39/fQ0NDT09O7u7vr6+s7OztoaGgsLCxYWFhubm58fHxMTExTU1OPj48xMTGfn58QEBDa2tqoqKicnJzFxcVbW1t2dnYcHByFhYVBQUEVFRWUlJS7f5FsAAAEH0lEQVR4nO2d61LCMBCFoyBXQdAKKori5f1f0dGOToOHdimbHorn+53J5hOc04ZtGoKFcTY/Ozbm2di0dhMLts0Orp38esf3+f1w13MxvGB7lHDjIXjJtihl5WCYsSVKWToYXrElSrl1MOyzJUqZn7xhX4YylCEdGcoQGE6mHSbTSXJDx5uyWoyTGw4cpjyEgQz3R4YNI8MayLBhZFgDGTaMDGvw7wzZV96XyQ2XXS7L5IZHhgxlKEM+MpThF3dsiVLuHAyv2RKleLRj3LMlSrl3MByyJUoZOhiGJ7ZFCR4fYTjmhpoLH8Hjbce48hIMvQ2afnbRHDP0R9749Hx9MwXzP7j8kxsZPoAVTD0rrJDiyLNCKSMk6NHwVWCd9N+gCvQdXXsXeQRFvPo7q0CXVY/+ZV5Bmcy/DAD1Dr6mKDQDhZ5SFNoCXXHM0pR6A6UmaUoVmICqb4lqwVi8TFTsB9TA23cMwhh4Ed5JVe2bDiqZMIlRLL6njMXRO6joHIQxTcdiI0EYg2LxOVm1Z1AtQRDGLEHRVLGIgtCjdb2C5mIRBaHLAxZV3ILCKWIRBaFHa341PbSD6h+LY1DFozPfAoxF15u10HwQxpyD4s6xCO8Iz11LlDIA5X1jEe20N9pC0AUL8IxFdEfYdZzfQNpYREH44Ta7kRuwCK9YREH44jT3HqSLRRSEC5eZ9wQ9POvRbcMMwphEd4vcIIxBsXjwJio7CGNQLB76fUr13a8JisXDNlGPIAhjPsCCDtnKRJuyjQdhDIrF+vsoaGOtkTvCMsCJEvW3a8FvsZQgjAF3i7Xn+jsVJwhjQCzWTS/wMyUpCGP+xmLd+PKbyZk/sehmyG4q/2U7Fr0MqUEYk8jQdY2HIUMjMiQiQyMyJCJDIzIkIkMjMiQiQyMyJCJDIzIkIkMjMiRiN+z1SjqYT8Dw/qsZ/m3nI3WtN1xVDWi74apyRNsNiyM2cETLDeMnpuFPEi03jNvuYbNvuw17htWfliGKRRkSkWGQYY4MicgwyDBHhkRkGGSYI0MiMgwyzJEhERkGGebIkIgMgwxzZEhEhkGGOTIkIsMgwxwZEpFh+A+GW2Me0JCWG8Zn9cGTElpuGJ8IAU+WaLlhdITGCxzRdsPCyVI7Dj5rveHvWS+7zgRrv2EYdbMs6+7sEj4BwwpkSESGRmRIRIZGZEhEhkZkSESGRmRIRIZGZEhEhkZkSESGRmRIRIZGZEhEhkZkSESGRmRIRIZGZEhEhkZkSESGRmRIRIZGZEhEhkZkSESGRmRIRIZGZEjk3xkOpp06TLdfFcnWKnCWBrZWARnKUIZ8ZCjD4zcEbx93oM/WKjCrXm4N6r+F3p91EsM1W6vIbfV692bBlooY+gtuRmypmJH3p7goeWsSiUE2d9Prv4zd1vUJl1VNayzPFJkAAAAASUVORK5CYII="; // Replace with the actual URL for the "on" image
const flashlightOffImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADa2tqkpKQODg7Nzc3V1dX5+fnp6emLi4tubm6IiIivr68hISFHR0f29vZNTU0pKSleXl4XFxdYWFihoaG8vLxsbGzDw8MkJCTo6OiQkJB0dHR+fn49PT1nZ2cvLy9vItRwAAADSElEQVR4nO3d6W7iQBBFYRPWsAQIWyBkef+nzETRaNzgmIJU121NznkB+vthlWx3m6qy1H9Zdkpr+dI3rd3S8FGt+abHoRPwVS35tlcf4ljtaGnsARyoFa0NHIQTNaK1iYPwQY1o7cFBuFIjWls5CHtqRGs9hAgRykOIsEE4vdM2zS70uym7rT7C60MYHMIbQhgcwhtCGBzCG0IYXH6hxyPYnzTILpx0tU2yCwsLIUKE+hAi/GymRrQ2cxCu1YjW1g7CjRrR2sZBOC/5JfBq7iCsppd/SNbUA1hVb2rHt735AMvdjvHqBazme7WlsZnLRfjVQY1p7OAHLHPrl/PThq3ac9bWF1je4PcY9SeVtYPPY8feWTu1qpbbIEwrZyx67Ehsqpix6DkI0w5l3A33XAdhWhljMetj9ye1rpNhEKZ11b5ONy+wqu7FwPvcQPXxi11+YFUthMBFBLAa6p4vzpwOOl1qpBqLvVEMUDcWA98/a8biUxxQ84Qx+yBMix+LAYMw7RgMdDlpeF2xYzFmEJ4Uebe4VwAjx2LcIEy7CxPKNmJFjcXQQZgWMxadXqHd1nMA8FkJjBiLRy0w/0YGj60IP2v4nhX4HnRH2FbWsagahGk5x+KdGvdVvrEoHIRpucaidBCmZRKqWbUQIkSoDyFChPoQIkSoDyFChPoQIkSoD+HvEd5/vswdmHeqqFm1bAt++PsSYmTc9S81pdmA/14jDW1Eoeg003rrO+xth+FknvMsy013bZmuRZGmKcty0x0jpg2cIk1TNywXIcLgECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6EP4OYXrsfPgfCtMPOpq+vCzSNGVZbvqVINMXikSapizLTU5m205/yzznmdZbO11vPMEvFJ1mW3Dn+ev7v3PrN1/EqnrGFXdWx812czT/JYiaVcu65CtTs2ohRIhQH0KECPUhRIhQH0KECPUhRIhQH0KECPUhRIhQH0KECPUhRIhQH0KECPUhRIhQH0KECPUhRIhQH0KECPUhRIhQH0KE5QvHWYA7NatWnn/mLuZfuT9bZwAuLv9sYKOlO3A5uvyzkY1MnxC4okVhwD/1j3s33v7odw1+AI+jYanGLCWsAAAAAElFTkSuQmCC"; // Replace with the actual URL for the "off" image


const FlashLight = ({ toggleFlashLight, show }) => {
  const [isOn, setIsOn] = useState(false);


  const toggleLight = () => {
    setIsOn(!isOn);
    
  };

  const goBack = () => {
    toggleFlashLight(false);
  };
  const imageUrl = isOn ? flashlightOnImageUrl : flashlightOffImageUrl;

  const imageStyle = {
  marginTop:"50px",
  marginBottom:"50px",
  width:"200",
  height:"400",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor: isOn ? "red" : "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    margin: "5px 0",
  };

  const backButtonStyle = {
    backgroundColor: "#3377ff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    left: "50%",
    transform: "translateX(-50%)",
    marginLeft:"70px",
    marginTop:"20px",
  };

  return (
    show && (
      <div>
        <img
          src={imageUrl}
          alt="Flashlight"
          style={imageStyle}
        />
        <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={toggleLight} >
        {isOn ? "OFF" : "ON"}
        </button>
        <button style={backButtonStyle} onClick={goBack}>
          Back
        </button>
      </div>
      </div>
    )
  );
};

export default FlashLight;
