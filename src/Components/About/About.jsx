import React from "react";
import "./About.css";
import picture from "../../assets/product1.png";

const About = () => {
  return (
    <div className="about">
      <div className="description">
        <h1>About Us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
          doloremque a rerum nihil distinctio nam tempore eaque, vero libero
          amet atque ab alias voluptate beatae consectetur illum perspiciatis
          eum dolor?
        </p>
      </div>

      <img src={picture} alt="pic" />
      <img src={picture} alt="pic" />
    </div>
  );
};

export default About;
