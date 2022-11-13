import React from "react";
import { useState } from "react";
import "./home.css";
import { data } from "../../data";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import wave from "./wave.svg";

const Home = () => {
  const [selected, setSelected] = useState(0);
  const tLength = data.length;
  return (
    <div className="main-div">
      <div className="left-div">
        <h1 className="main-lineone">Build and Launch</h1>
        <h1 className="main-linetwo">your best project</h1>
        <h1 className="coloured-line">in 12 weeks</h1>
        <p>Ideate,build,network and get mentored</p>
        <p>with the best people in teah</p>
        <button className="apply-btn btn">Apply now</button>
        <button className="know-btn btn">Konw more</button>
        {/* <div className='info-div first-div'>
            <span className='coloured-line info'>5</span>
            <span>Batches</span>
        </div>
        <div className='info-div second-div'>
            <span className='coloured-line info'>40+</span>
            <span>Graduates</span>
        </div>
        <img className='wave-img' src={wave} alt="wave"/>
        <div className='info-div third-div'>
            <span className='coloured-line info'>2000+</span>
            <span>Applications</span>
        </div>
        <div className='info-div fourth-div'>
            <span className='coloured-line info'>11</span>
            <span>projectsS</span>
        </div> */}
      </div>
      <div className="right-div">
        <h3 className="name">{data[selected].name}</h3>
        <span className="batch">{data[selected].batch}</span>
        <p className="experience">{data[selected].experience}</p>
        <div className="arrows">
          <FiArrowLeft
            className="left-arrow"
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          <FiArrowRight
            className="right-arrow"
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
