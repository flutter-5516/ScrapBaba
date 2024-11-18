import React from "react";
import "./AboutUs.css";
import Facebook from "../../Assets/facebook.png";
import Instagram from "../../Assets/instagram.png";
import Twitter from "../../Assets/twitter.png";

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <header className="aboutUs-header">
        <h1>About Us</h1>
        <p className="welcome-text">
          Welcome to Kabadiwala Sell Scrap Online
        </p>
      </header>

      {/* About Section */}
      <section className="about-section">
        <p>
        Kabadiwala, co-founded by the innovative team at <strong>WasteWizard</strong>, is proud to lead the way in revolutionizing online recycling and waste management.
        </p>
        <p>
        Our platform offers a secure and effortless solution for selling scrap directly from the comfort of your home. We understand that disposing of unwanted items can be a hassle, so we’ve created a seamless and stress-free experience for you. As your trusted online kabadiwala, we’re committed to providing reliable, efficient, and doorstep scrap pickup services that make decluttering a breeze.
        </p>
      </section>

      {/* Benefits List */}
      <section className="benefits-section">
        <h2>Here’s why we’re the preferred choice for scrap pickup:</h2>
        <ul>
          <li>
            <strong>Effortless Online Booking:</strong> With just a few simple clicks, you can schedule your pickup from the comfort of your home. Our intuitive platform ensures a smooth, hassle-free experience, giving you the flexibility to choose the perfect time and date for your convenience.
          </li>
          <li>
            <strong>Wide Range of Accepted Items:</strong> No matter what you need to dispose of, we’ve got you covered! From paper and cardboard to plastic, metal, glass, and even electronic waste – we accept a wide variety of scrap materials for recycling.
          </li>
          <li>
            <strong>Friendly and Professional Team:</strong> Our highly-trained team is dedicated to providing exceptional service with a smile. We handle all your scrap materials with care and professionalism, ensuring a smooth and efficient process every time.
          </li>
          <li>
            <strong>Eco-Friendly Disposal:</strong> Join us in protecting the planet! We take sustainability seriously. Once we collect your materials, we carefully sort and process them using eco-friendly methods, minimizing waste and conserving resources.
          </li>
          <li>
            <strong>Transparent and Fair Pricing:</strong> We believe in being upfront and honest. Enjoy peace of mind knowing that our pricing is fair, transparent, and free from hidden fees – because your trust matters to us.
          </li>
        </ul>
        <p className="join-us">
          Join us in our commitment to a cleaner and greener future. By availing
          our scrap pickup service, you contribute to the reduction of landfill
          waste and the conservation of valuable resources.
        </p>
      </section>

      {/* Vision, Mission, Goal Section */}
      <section className="vision-mission-goal">
        <div className="card">
          <h3>Vision</h3>
          <p>
            To be the premier online platform for doorstep kabadiwala scrap
            pickup, leading the recycling industry with a seamless, eco-friendly
            solution.
          </p>
        </div>
        <div className="card">
          <h3>Mission</h3>
          <p>
            Our mission is to make scrap disposal a simple and convenient
            process for everyone. We contribute to a cleaner and healthier
            environment.
          </p>
        </div>
        <div className="card">
          <h3>Goal</h3>
          <p>
            Our goal is to establish Kabadiwala Online as the go-to platform for
            kabadiwala scrap pickup, achieving widespread adoption.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="aboutUs-footer">
        <p>
          Contact Kabadiwala Online Sell Scrap Online today and experience the
          convenience of scrap disposal from the comfort of your home. Together,
          we can make a difference!
        </p>
        <p>
          Book Pickup Request -{" "}
          <a href="" className="footer-link">
            www.Kabadiwalaonline.com
          </a>
        </p>

        <div className="social-media">
          <p>Follow us on social media:</p>
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>

        <div className="footer-contact">
          <p>© 2024 Kabadiwala Online | All rights reserved.</p>
          <p>KIET Ghaziabad </p>
          <p>Email: info@kabadiwala.com | Phone: 8318308734</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
