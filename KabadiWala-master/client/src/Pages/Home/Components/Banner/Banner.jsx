import "./Banner.scss";

//Images
import banner from "../../../../Assets/banner.png";
const Banner = () => {
  return (
    <section className="banner">
      <img src={banner} alt="" />
      <div className="content">
        <h2>
          Get best price for your scarp only at <span>KabadiWala !</span>
        </h2>
        <a href="">Call us Now !</a>
      </div>
    </section>
  );
};

export default Banner;
