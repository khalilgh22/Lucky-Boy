import React from "react";
import "./landpage.css";
import video from "../../assets/landpage.mp4";

const Landpage = () => {
  return (
    <div className="landpage">
      <video
        className="land"
        src={video}
        loop
        autoPlay
        muted
        playsInline
      ></video>
      <div className="content">
        <h1 className="slogon">Welcome To Lucky Boy</h1>
      </div>
    </div>
  );
};

export default Landpage;
