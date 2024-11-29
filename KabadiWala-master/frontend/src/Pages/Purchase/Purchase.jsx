import React, { useState, useEffect } from "react";
import "./Purchase.css";

const Purchase = () => {
  const [scraps, setScraps] = useState([]);
  const [location, setLocation] = useState("Ghaziabad");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchScrapsByLocation = async (location) => {
    console.log("Fetching scraps for location:", location);
    setLoading(true);
    setError(null);
    const testloc = { location: location }; // Dynamically using location

    try {
      const response = await fetch(
        `https://scrap-baba-api.vercel.app/scrap/get`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(testloc),
        }
      );

      const resObj = await response.json();
      console.log("API Response:", resObj); 

      if (resObj && resObj.result) {
        setScraps(resObj.result); // Update scraps state if valid data exists
        console.log("Data fetched successfully!");
      } else {
        setScraps([]);  // If no valid data, set empty scraps
        console.log("Failed to fetch data or invalid data structure.");
      }
    } catch (error) {
      setError("Failed to fetch scraps. Please try again later.");
      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop loading once fetch is complete
    }
  };

  useEffect(() => {
    console.log("Location changed:", location);
    fetchScrapsByLocation(location);
  }, [location]);

  return (
    <div className="purchase-page">
      <div className="purchase-container">
        <h1>Available Waste Materials for Purchase</h1>

        <div className="location-filter">
          <label htmlFor="location">Select Location: </label>
          <select
            id="location"
            value={location}
            onChange={(e) => {
              console.log("Location selected:", e.target.value);
              setLocation(e.target.value);
            }}
          >
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
          </select>
        </div>

        {loading && <p>Loading scraps data...</p>}
        {error && <p>{error}</p>}

        {scraps.length === 0 && !loading && !error ? (
          <p>No data available for this location. Please check back later.</p>
        ) : (
          <table className="purchase-table">
            <thead>
              <tr>
                <th>Seller Name</th>
                <th>Material Type</th>
                <th>Weight (kg)</th>
                <th>Location</th>
                <th>Contact Phone</th>
                <th>Offer Price</th>
              </tr>
            </thead>
            <tbody>
              {scraps.length > 0 ? (
                scraps.map((item) => {
                  console.log("Rendering item:", item);
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.scrapType}</td>
                      <td>{item.scrapWeight}</td>
                      <td>{item.city}</td>
                      <td>{item.phone}</td>
                      <td>{item.pricePerKg}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6">No scraps available for this location</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Purchase;
