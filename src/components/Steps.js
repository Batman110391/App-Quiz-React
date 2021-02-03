import React from "react";
import "./Steps.css";

function Steps(numb) {
  return (
    <div className="steps">
      <span
        className={
          numb.count[numb.count.length - 5] ? "incomplete" : "complete"
        }
      >
        {numb.count[numb.count.length - 5]
          ? numb.count[numb.count.length - 5]
          : ""}
      </span>
      <span
        className={
          numb.count[numb.count.length - 4] ? "incomplete" : "complete"
        }
      >
        {numb.count[numb.count.length - 4]
          ? numb.count[numb.count.length - 4]
          : ""}
      </span>
      <span
        className={
          numb.count[numb.count.length - 3] ? "incomplete" : "complete"
        }
      >
        {numb.count[numb.count.length - 3]
          ? numb.count[numb.count.length - 3]
          : ""}
      </span>
      <span
        className={
          numb.count[numb.count.length - 2] ? "incomplete" : "complete"
        }
      >
        {numb.count[numb.count.length - 2]
          ? numb.count[numb.count.length - 2]
          : ""}
      </span>
      <span
        className={
          numb.count[numb.count.length - 1] ? "incomplete" : "complete"
        }
      >
        {numb.count[numb.count.length - 1]
          ? numb.count[numb.count.length - 1]
          : ""}
      </span>
      <div className="line"></div>
    </div>
  );
}

export default Steps;
