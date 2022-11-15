import React from "react";
import "./left2.css";

function Left2() {
  return (
    <div className="left-a-2">
      <div className="main_box">
        <div className="box_head-a">
          <h1 className="h1">
            December <span className="year">2019</span>
          </h1>
        </div>
        <div className="box_content">
          <div className="content_2">
            <div className="content_2_head">
              <h3>2 November</h3>
            </div>
            <div className="content_2_para">
              <p className="text">
                {" "}
                Use the online image color picker above to select a color and
                get the HTML Color Code of this pixel. Also you get the HEX
                color code value, RGB value and HSV value. Under 'Use Your
                Image' You can upload your own image (for example an screenshot
                of your desktop).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left2;
