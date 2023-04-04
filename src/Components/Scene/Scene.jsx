import React from "react";
import "./scene.css";
import picture1 from "../../assets/img1.jpg";
import picture2 from "../../assets/img2.jpg";
import picture3 from "../../assets/img3.jpg";
import picture4 from "../../assets/img4.jpg";
import picture5 from "../../assets/img5.jpg";
import picture6 from "../../assets/img6.jpg";

const Scene = () => {
  return (
    <div className="scene">
      <div className="row-one">
        <img src={picture1} alt="picture" />
        <div className="bottom">
          <img src={picture2} alt="picture" />
          <img src={picture3} alt="picture" />
        </div>
      </div>
      <img className="middle" src={picture4} alt="picture" />
      <div className="last-row">
        <img src={picture5} alt="picture" />
        <img src={picture6} alt="picture" />
      </div>
    </div>
  );
};

export default Scene;
