import { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

// Images
import logo from "../../Assets/logo.jpg";
import close from "../../Assets/close.png";
import hamburger from "../../Assets/hamburger.png";
import dsdl from "../../Assets/DSDL.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  // Handle navigation for Sell and Purchase Scrap buttons
  const handleButton = (path) => {
    setMenu(!menu); // Close menu after button click
    navigate(path);  // Navigate to the specified path (either /sell or /purchase)
  };

  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="KabadiWala Logo" />
          <h3>
            <span>KabadiWala</span>
          </h3>
        </NavLink>
      </div>

      <div className={menu ? "menu active" : "menu"}>
        <NavLink to="/services" onClick={handleMenu}>
          Services
        </NavLink>
        <NavLink to="/about-us" onClick={handleMenu}>
          About Us
        </NavLink>
        <NavLink to="/rate-list" onClick={handleMenu}>
          Rate List
        </NavLink>
        {/* Updated buttons with different navigation paths */}
        <button className="button" onClick={() => handleButton("/sell")}>
          Sell Scrap
        </button>
        <button className="button" onClick={() => handleButton("/purchase")}>
          Purchase Scrap
        </button>
        <img src={dsdl} alt="DSDL" />
      </div>

      <div className="hamburger" onClick={handleMenu}>
        <img src={menu ? close : hamburger} alt="Hamburger Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
