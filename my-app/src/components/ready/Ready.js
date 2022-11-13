import React from "react";
import { readyData } from "../../readyData";
import "./ready.css";

const Ready = () => {
  return (
    <div>
      <h2 className="ready-line1 lines">Be work ready from</h2>
      <h2 className="ready -line2 lines">
        Day 1 with <span className="coloured-line">Crework</span>
      </h2>
      <div className="display-div">
        {readyData.map((item, i) => (
          <div className="card" key={i}>
            <h3 className="mainline">{item.mainline}</h3>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ready;
