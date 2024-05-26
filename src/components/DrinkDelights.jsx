import React, { useState, useEffect } from "react";
import { drinks } from "./data";
import "./DrinkDelights.css"; // Assuming you have some CSS styles

const tagColors = {
  All: "grey",
  Cold: "blue",
  "Non-Alcoholic": "green",
  Seasonal: "pink",
  Alcoholic: "red",
  Caffeinated: "yellow",
  Hot: "orange",
};

const DrinkDelights = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    document.title = `${selectedTag} - Drink Delights`;
  }, [selectedTag]);

  const filterDrinks = (tag) => {
    if (tag === "All") return drinks;
    return drinks.filter((drink) => drink.tags.includes(tag));
  };

  const filteredDrinks = filterDrinks(selectedTag);

  return (
    <main>
      <h1>{selectedTag} Drinks</h1>
      <div className="drinks__tags tag-selection" style={{ marginTop: "2rem" }}>
        {Object.keys(tagColors).map((tag) => (
          <p
            key={tag}
            className={`drinks__tag drinks__tag--${tagColors[tag]} ${
              selectedTag === tag ? "" : "tag-inactive"
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </p>
        ))}
      </div>
      <div className="drinks">
        {filteredDrinks.map((drink) => (
          <div key={drink.title} className="drinks__item">
            <img src={drink.url} alt={drink.title} />
            <div>
              <h3>{drink.title}</h3>
              <p>{drink.description}</p>
            </div>
            <div className="drinks__tags">
              {drink.tags.map((tag) => (
                <p
                  key={tag}
                  className={`drinks__tag drinks__tag--${tagColors[tag]}`}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DrinkDelights;
