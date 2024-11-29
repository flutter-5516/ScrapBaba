import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostDataContext } from "../../Store/Sell-Data"; 
import "./Sell.css";

const materialOptions = [
  { value: "iron", label: "Iron" },
  { value: "plastic", label: "Plastic" },
  { value: "paper", label: "Paper" },
  { value: "appliances", label: "Appliances" },
  { value: "other", label: "Other" },
];

const Sell = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [weight, setWeight] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const [successMessage, setSuccessMessage] = useState(""); 
  const[name,setName]=useState("");

  const navigate = useNavigate(); 
  const { addData } = useContext(PostDataContext); 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!selectedMaterial || !weight || !location || !phoneNo || !offerPrice||!name) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
  
    const postData = {
      name: name,
      phone: phoneNo,
      city: location,
      scrapType: selectedMaterial,
      scrapWeight: weight,
      location: location,
      pricePerKg: offerPrice,
    };
  
    try {
      const response = await fetch("https://scrap-baba-api.vercel.app/scrap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
  
      const resObj = await response.json();
      console.log("API Response:", resObj); 
  
      if (resObj.result && resObj.result.success) {
        addData(resObj);
        console.log(resObj);
        setSuccessMessage("Scrap added successfully!");
        setErrorMessage("");
        alert("Scrap added successfully!");
        navigate("/");
      } else {
        setErrorMessage("Failed to add scrap. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="sell-page">
      <div className="sell-container">
        <h1>Sell Your Waste</h1>

        {/* Display success or error message */}
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <form onSubmit={handleSubmit} className="sell-form">
          {/* Select Material */}
          <div className="form-group">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Eg.John Doe"
              required
            /> 
          </div>


          <div className="form-group">
            <label htmlFor="material">Type of Waste Material</label>
            <select
              id="material"
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              required
            >
              <option value="">Select material...</option>
              {materialOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Enter Weight */}
          <div className="form-group">
            <label htmlFor="weight">Approximate Weight (in kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
              required
            />
          </div>

          {/* Enter Location */}
          <div className="form-group">
            <label htmlFor="location">Enter Your Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              required
            />
          </div>

          {/* Enter Phone No */}
          <div className="form-group">
            <label htmlFor="phoneNo">Enter Your Phone No.</label>
            <input
              type="tel"
              id="phoneNo"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              placeholder="Enter Phone No."
              required
            />
          </div>

          {/* Offer Price */}
          <div className="form-group">
            <label htmlFor="offerPrice">Offer Price (per kg)</label>
            <input
              type="number"
              id="offerPrice"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              placeholder="Offer Price"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;
