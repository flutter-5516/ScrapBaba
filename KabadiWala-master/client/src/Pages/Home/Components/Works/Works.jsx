import "./Works.css"

//Images
import call from "../../../../Assets/call.png"
import arrive from "../../../../Assets/arrive.png"
import pay from "../../../../Assets/pay.jpg"
import arrows from "../../../../Assets/arrows.png"



const Works = () => {
  return (
    <section className="works">
      <h2 className="heading">How it works ?</h2>
      <div className="cards">
        <div className="card">
          <img src={call} alt="" />
          <div className="content">
            <div>
              <h4>Step 1 </h4>
              <h3>Book a pickup</h3>
            </div>
            <p>Effortless Disposal, Anytime, Anywhere – Book Your Waste Pickup Here!</p>
          </div>
        </div>

        <img src={arrows} alt="" className="arrow"/>
        <div className="card">
          <img src={arrive} alt="" />
          <div className="content">
            <div>
              <h4>Step 2 </h4>
              <h3>Executive arrives</h3>
            </div>
            <p>Your Collection Expert Has Arrived – Just a Few Steps Away from a Clutter-Free Space! Enjoy a quick, hassle-free pickup for a cleaner, tidier home</p>
          </div>
        </div>
        <img src={arrows} alt="" className="arrow" />
        <div className="card">
          <img src={pay} alt="" />
          <div className="content">
            <div>
              <h4>Step 3</h4>
              <h3>Get paid</h3>
            </div>
            <p>Fast and Easy: Instant Money Transfer for Your Waste – Right at Your Fingertips! No Waiting, No Delays – Get Paid Instantly and Enjoy the Convenience of Real-Time Payments for Every Pickup. Your Rewards Are Just a Tap Away!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works