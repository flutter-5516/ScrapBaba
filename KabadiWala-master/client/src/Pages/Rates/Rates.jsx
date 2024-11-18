import "./Rates.css";
import { useEffect, useState, useCallback } from "react";

// Data
import { data } from "./Data";

const Rates = () => {
  // State for items and search
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Set initial items and filtered items
  useEffect(() => {
    setAllItems(data);
    setFilteredItems(data);  // Initially, show all data
  }, []);

  // Filter logic to be triggered when activeCategory or searchTerm changes
  const filterItems = useCallback(() => {
    let items = allItems;

    // Filter based on active category
    if (activeCategory !== "All") {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Further filter based on the search term
    if (searchTerm) {
      items = items.filter((item) =>
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(items);
  }, [activeCategory, searchTerm, allItems]);

  useEffect(() => {
    filterItems();  // Re-filter items on changes in activeCategory or searchTerm
  }, [filterItems]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="rate-list">
      <div className="head">
        <h1 className="heading">Scrap Prices</h1>
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for any category"
            className="search-input"
          />
        </div>
      </div>

      <div className="filter">
        {filteredItems.length > 0 ? (
          <>
            <div className="filter-btn">
              {["All", "Plastic", "Paper", "Metal", "Appliances", "Others"].map((category) => (
                <h2
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </h2>
              ))}
            </div>

            <div className="filter-items">
              {filteredItems.map((item) => {
                const { id, category, content, image, data } = item;
                return (
                  <div className="filter-data" key={id}>
                    <div className="left">
                      <h3>{category}</h3>
                      <img src={image} alt={category} />
                      <p>{content}</p>
                    </div>

                    <div className="right">
                      {data.map((product) => {
                        const { id, name, price } = product;
                        return (
                          <div className="card" key={id}>
                            <h4>{name}</h4>
                            <p>₹ {price} / kg</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p className="backup-text">Please try searching within our given categories!</p>
        )}
      </div>
    </section>
  );
};

export default Rates;
