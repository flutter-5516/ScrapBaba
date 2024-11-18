import "./Home.css"

import Hero from "./Components/Hero/Hero"
import Works from "./Components/Works/Works"
import Services from "./Components/Services/Services"
import ContactUs from "../../Components/ContactUs/ContactUs"
import Banner from "./Components/Banner/Banner"
import Features from "./Components/Features/Features"
import About from "./Components/About/About"

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <div className="gap"></div>
      <About/>
      <div className="gap"></div>
      <Works />
      
      <div className="gap"></div>
      <Services />
      <div className="gap"></div>
      <Features />
      <div className="gap"></div>  
      <Banner />
      <div className="gap"></div>
      <ContactUs />
      <div className="gap"></div>



    </section>
  )
}

export default Home