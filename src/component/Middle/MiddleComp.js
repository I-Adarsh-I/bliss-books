import React from "react";
import "./middle.css";
import Left from "..//left//Left";
import Right from "..//right//Right";

function MiddleComp() {
  return (
    <div className="m1">
      <div className="left">
        <Left />
      </div>
      <div className="mid">
        <div className="upper">
          <h1>Decem</h1>
        </div>
        <div className="lower">
        <div className="circles">
          <div className="circle1a">
            <p className="circle_para">B</p>
          </div>
          <div className="circle2"></div>
          
        </div>
        </div>
        <div className="line_box">
        <div className="line"></div>
        </div>
      </div>

      <div className="right">
        <Right />
      </div>
    </div>
  );
}

export default MiddleComp;
