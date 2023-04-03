import React from "react";
import "./navbar.css";
import logo from "../../assets/logo_LB.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <img id="logo" src={logo} alt="logo" className="logo" />

      {/* <ul className="links">
        <li>
          {" "}
          <a href="#Home">Home</a>{" "}
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul> */}
      {/* <button onClick={() => console.log("yes")}>get the app</button> */}
      {/* put a button and role of this button is nav to download the app */}
      <a className="get-app" href="#">
        Get the App
      </a>
    </div>
  );
};
export default Navigation;
