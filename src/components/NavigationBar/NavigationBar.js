import { Link, Route, Routes } from "react-router-dom";
import "./index.css";
import logo from "../../assets/Logo.svg";
import menuIcon from "../../assets/menu-icon.svg";
import closeIcon from "../../assets/xmark.circle.svg";
import grayLogo from "../../assets/little-lemon-logo-grey.png";
import { useEffect, useState } from "react";

const navItems = [
  { title: "Home", ref: "/" },
  { title: "About", ref: "/about" },
  { title: "Menu", ref: "/menu" },
  { title: "Reservation", ref: "/reservation" },
  { title: "Order Online", ref: "/order-online" },
  { title: "Login", ref: "/login" },
];

function NavigationBar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        <div className="nav-box">
          {navItems.map((item, index) => (
            <Link to={item.ref} className="nav-item" key={index}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="mobile-menu" onClick={() => setShow(!show)}>
          <img src={show ? closeIcon : menuIcon} alt="Menu" />
        </div>
      </nav>
      {show && (
        <div className="side-bar">
          {navItems.map((item, index) => (
            <Link to={item.ref} className="nav-item" key={index}>
              {item.title}
            </Link>
          ))}
          <img className="logo-large" src={grayLogo} alt="Little Lemon logo" />
        </div>
      )}
      <Routes>
        {navItems.map((item, index) => (
          <Route path={item.ref} element={null} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default NavigationBar;
