import React from "react";
import { workData } from "../../workData";
import "./forWhom.css";

const ForWhom = () => {
  return (
    <div>
      <h2 className="heading-line coloured-line">Who is this program for ?</h2>
      <div className="display-div">
        {workData.map((item, i) => (
          <div className="card-div" key={i}>
            <h3 className="mainline">{item.info}</h3>
            {/* <p className='description'>{item.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForWhom;
