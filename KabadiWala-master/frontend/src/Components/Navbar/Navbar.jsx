import { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

// Images
import logo from "../../Assets/logo.png";
import close from "../../Assets/close.png";
import hamburger from "../../Assets/hamburger.png";
import dsdl from "../../Assets/DSDL.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleButton = (path) => {
    setMenu(!menu);
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="KabadiWala Logo" />
          <h3>
            <span>SCRAP BABA</span>
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
        {userLoggedIn ? (
          <button className="button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="button" onClick={() => handleButton("/login")}>
            Login
          </button>
        )}
      </div>

      <div className="hamburger" onClick={handleMenu}>
        <img src={menu ? close : hamburger} alt="Hamburger Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
