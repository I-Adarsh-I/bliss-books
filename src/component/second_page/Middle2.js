import React from "react";
import Left2 from "..//second_page//left2//Left2";
import Right2 from "../second_page/right2/Right2";
import "./middle2.css";

function middle2() {
  return (
    <div className="m2">
      <div className="left">
        <Left2 />
      </div>
      <div className="mid2">
        <div className="line2"></div>
        <div className="circles-2">
          <div className="circle1a_2">
            <div className="boxes">
              <div className="box1">
                <div className="box_head">
                  <h2>Creating</h2>
                </div>
              </div>
              <div className="box2">
                <div className="box_para">
                  <p>
                    lor Code of this pixel. Also you get the HEX color code
                    value, RGB value and HSV value. Under 'Use Your Image' You
                    can upload your own image (for example an screenshot of your
                    desktop), paste an image from clipboard, put a picture url
                    in the textbox below. Or use an website url, you will see a
                    thumbnail on the left side.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="circle2"></div>
        </div>
      </div>
      <div className="right">
        <Right2 />
      </div>
    </div>
  );
}

export default middle2;
