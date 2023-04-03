import React from "react";
import "./AppSection.css";
import mobile from "../../assets/mobile_img.png";

function AppSection() {
  return (
    <div className="section1">
      <div className="header-text">
        <h2>THE SMOOTHEST RIDE</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias
          fugit, totam possimus accusamus non reiciendis corporis nisi ipsum
          ipsam vel nobis eaque quibusdam sequi repellat autem beatae, quisquam
          accusantium?
        </h3>
      </div>

      <div className="screens ">
        <img src={mobile} alt="mobil-img" />
        <div className="description">
          <h1>SCREEN</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere amet
            laboriosam blanditiis necessitatibus iure fugiat quas minus!
            Corporis provident soluta doloremque, perferendis neque et. Mollitia
            qui facilis odit eum. At?
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppSection;
