import { Link } from "react-router-dom";
import "./Footer.css";

//Images
import logo from "../../Assets/logo.jpg";
import instagram from "../../Assets/instagram.png";
import facebook from "../../Assets/facebook.png";
import twitter from "../../Assets/twitter.png";
import home from "../../Assets/home.png";
import email from "../../Assets/email.png";
import phone from "../../Assets/telephone.png";

const Footer = () => {
  return (
    <footer>
      <div className="upper">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
            <h3>
              Online <span>KabadiWala</span>
            </h3>
          </Link>
        </div>

        <div className="details">
          <div className="group">
            <img src={home} alt="" />
            <a href="https://www.google.com/maps/place/KIET+Group+of+Institutions/@28.7531817,77.4944915,17z/data=!3m1!4b1!4m6!3m5!1s0x390cf574d18f2b6f:0x4a65c0bc0122eb2f!8m2!3d28.7531817!4d77.4970664!16s%2Fg%2F1tdw1vv3?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
             Krishna Institute of Engineering and Technology
              <br />
             Ghaziabad
            </a>
          </div>

          <div className="group">
            <img src={email} alt="" />
            <a href="#" target="_blank">
              divyanshgupta5516@gmail.com
            </a>
          </div>

          <div className="group">
            <img src={phone} alt="" />
            <a href="#" target="_blank">
            +91-8318308734
            </a>
          </div>
        </div>

        <div className="important-links">
          <Link to="/about-us">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/rate-list">Rate List</Link>
          <Link to="/sell">Sell Scrap</Link>
        </div>

        <div className="help">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
        </div>

        <div className="social-media">
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
      <div className="lower">
        <p>
          Made with ❤ by{" "}
          <a href="#" target="_blank">
            WasteWizard Team
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
