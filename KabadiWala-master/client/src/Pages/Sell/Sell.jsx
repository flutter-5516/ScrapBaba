import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sell.css";
import { PostDataContext } from "../../Store/Sell-Data"; // Make sure the path is correct

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
  const [PhoneNo, setPhoneNo] = useState("");
  const navigate = useNavigate();

  // Get the addData function from context
  const { addData } = useContext(PostDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation (optional)
    if (!selectedMaterial || !weight || !location || !PhoneNo) {
      alert("Please fill in all fields.");
      return;
    }

    // Add data to global context state using addData function
    addData(selectedMaterial, weight, location, PhoneNo);

    // Log the data for debugging (you can remove this after testing)
    console.log({
      material: selectedMaterial,
      weight,
      location,
      phone: PhoneNo,
    });

    // Optionally navigate to a different page after form submission
    alert("Sell request submitted!");
    navigate("/"); // Redirect to homepage or other page
  };

  return (
    <div className="sell-page">
      <div className="sell-container">
        <h1>Sell Your Waste</h1>
        <form onSubmit={handleSubmit} className="sell-form">
          {/* Select Material */}
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
            <label htmlFor="PhoneNo">Enter Your Phone No.</label>
            <input
              type="tel" // Use type="tel" for phone number input
              id="PhoneNo"
              value={PhoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              placeholder="Enter Phone No."
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
