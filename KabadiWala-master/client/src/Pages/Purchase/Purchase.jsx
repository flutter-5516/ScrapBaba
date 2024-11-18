import React, { useContext } from "react";
import { PostDataContext } from "../../Store/Sell-Data";
import "./Purchase.css"; // You can style the purchase section here

const Purchase = () => {
  // Accessing the data from PostDataContext
  const { postData } = useContext(PostDataContext);

  return (
    <div className="purchase-page">
      <div className="purchase-container">
        <h1>Available Waste Materials for Purchase</h1>

        {/* Check if there is any data */}
        {postData.length === 0 ? (
          <p>No data available. Please check back later.</p>
        ) : (
          <table className="purchase-table">
            <thead>
              <tr>
                <th>Material Type</th>
                <th>Weight (kg)</th>
                <th>Location</th>
                <th>Contact Phone</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through postData to display each item */}
              {postData.map((item, index) => (
                <tr key={index}>
                  <td>{item.wasteType}</td>
                  <td>{item.weight}</td>
                  <td>{item.location}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Purchase;
