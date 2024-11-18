import "./Hero.css";

//Images
import hero from "../../../../Assets/hero.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <main className="hero">
      <div className="text">
        <div className="highlight">
          <h4>We give new life to your scrap!</h4>
          <h1>
            Turning your trash <br /> into <span>cash.</span>
          </h1>
        </div>
        <p>
          Our expert team provides hassle-free pick-up services and efficient,{" "}
          <span /> eco-friendly recycling solutions. Join us in our mission to
          create a cleaner, <span /> more sustainable future. Contact us today
          to turn your trash into cash.
        </p>
        <button className="button" onClick={() => navigate("/ContactUs")}>
          Contact Us !
        </button>
      </div>
      <img src={hero} alt="" />
    </main>
  );
};

export default Hero;
