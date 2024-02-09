import React from "react";
import "./index.css";
import imageSource from "../../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reservation");
  };
  return (
    <header className="container">
      <div className="header-title">
        <div className="info">
          <h2>Little Lemons</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={handleClick}>Reserve a Table</button>
        </div>
        <img src={imageSource} alt="Header" />
      </div>
    </header>
  );
}

export default Header;
