import React, { useState } from "react";
import CardRecommended from "../../CardRecommended/cardRecommended";
import CardTrending from "../../CardTrending/cardTrending";
import ".././HomePage/homePage.css";
import data from "../../../data/data.json";

const PageBookmarked = () => {
  const [trendingItems, setTrendingItems] = useState(data.filter((item) => item.isTrending && item.isBookmarked));
  const [recommendedItems, setRecommendedItems] = useState(data.filter((item) => !item.isTrending && item.isBookmarked));

  const handleBookmarkToggle = (index, isTrending) => {
    if (isTrending) {
      const updatedItems = [...trendingItems];
      updatedItems[index].isBookmarked = !updatedItems[index].isBookmarked;
      setTrendingItems(updatedItems);
    } else {
      const updatedItems = [...recommendedItems];
      updatedItems[index].isBookmarked = !updatedItems[index].isBookmarked;
      setRecommendedItems(updatedItems);
    }
  };

  return (
    <div className="container">
      <div className="trending">
        <div className="trending-title">
          <h1>Trending</h1>
        </div>
        <div className="cards-trending">
          {trendingItems.map((item, index) => (
            <CardTrending key={index} {...item} onBookmarkToggle={() => handleBookmarkToggle(index, true)} />
          ))}
        </div>
      </div>

      <div className="recommended">
        <div className="recommended-title">
          <h1>Recommended for you</h1>
        </div>
        <div className="cards-recommended">
          {recommendedItems.map((item, index) => (
            <CardRecommended key={index} {...item} onBookmarkToggle={() => handleBookmarkToggle(index, false)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageBookmarked;
