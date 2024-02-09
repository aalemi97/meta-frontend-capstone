import { Link, Route, Routes } from "react-router-dom";
import "./index.css";
import logo from "../../assets/Logo.svg";
import menuIcon from "../../assets/menu-icon.svg";
import closeIcon from "../../assets/xmark.circle.svg";
import grayLogo from "../../assets/little-lemon-logo-grey.png";
import { useState } from "react";
import { HomePage } from "../HomePage";
import { ReservationPage } from "../Reservation/ReservationPage";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  />
</svg>;

const navItems = [
  { title: "Home", ref: "/", element: <HomePage /> },
  { title: "About", ref: "/about", element: null },
  { title: "Menu", ref: "/menu", element: null },
  { title: "Reservation", ref: "/reservation", element: <ReservationPage /> },
  { title: "Order Online", ref: "/order-online", element: null },
  { title: "Login", ref: "/login", element: null },
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
          {show ? (
            <XCircleIcon className="icon" />
          ) : (
            <Bars3Icon className="icon" />
          )}
          {/* <img src={show ? closeIcon : menuIcon} alt="Menu" /> */}
        </div>
      </nav>
      {show && (
        <div className="side-bar">
          {navItems.map((item, index) => (
            <Link
              to={item.ref}
              className="nav-item"
              key={index}
              onClick={() => {
                setShow(false);
              }}
            >
              {item.title}
            </Link>
          ))}
          <img className="logo-large" src={grayLogo} alt="Little Lemon logo" />
        </div>
      )}
      <Routes>
        {navItems.map((item, index) => (
          <Route path={item.ref} element={item.element} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default NavigationBar;
