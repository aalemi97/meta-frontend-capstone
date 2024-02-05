import { Link, Route, Routes } from "react-router-dom";
import "./index.css";
import logo from "../../assets/Logo.svg";

const navItems = [
  { title: "Home", ref: "/" },
  { title: "About", ref: "/about" },
  { title: "Menu", ref: "/menu" },
  { title: "Reservation", ref: "/reservation" },
  { title: "Order Online", ref: "/order-online" },
  { title: "Login", ref: "/login" },
];

function NavigationBar() {
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
      </nav>
      <Routes>
        {navItems.map((item, index) => (
          <Route path={item.ref} element={null} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default NavigationBar;
