import React from "react";
import "./left.css";

function Left() {
  return (
    <div className="left-a">
      <div className="ls_heading">
        <h2 className="head">journey begins</h2>
      </div>
      <div className="ls_para">
        <div className="para_head">
          <h3> 2 November</h3>
        </div>
        <p className="ls_para_des">
          Use the online image color picker above to select a color and get the
          HTML Color Code of this pixel. Also you get the HEX color code value,
          RGB value and HSV value. Under 'Use Your Image' You can upload your
          own image (for example an screenshot of your desktop), paste an image
          from clipboard, put a picture url in the textbox below. Or use an
          website url, you will see a thumbnail on the left side.
        </p>
      </div>
    </div>
  );
}

export default Left;
