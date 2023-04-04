import React from "react";
import "./Cards.css";
import product from "../../assets/product1.png";

const Cards = () => {
  return (
    <div className="card">
      <img src={product} alt="product" />
      <div className="card-info">
        <h3>Product Name</h3>
        <p>Product Description</p>
        <h4>$ 100</h4>
      </div>
    </div>
  );
};

export default Cards;
