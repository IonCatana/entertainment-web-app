import React, { useState } from "react";
import CardRecommended from "../../CardRecommended/cardRecommended";
import CardTrending from "../../CardTrending/cardTrending";
import ".././HomePage/homePage.css";
import data from "../../../data/data.json";

const PageTvSeries = () => {
  const [trendingTVSeries, setTrendingTVSeries] = useState(
    data.filter((item) => item.isTrending && item.category.name === "TV Series")
  );

  const [recommendedTVSeries, setRecommendedTVSeries] = useState(
    data.filter((item) => !item.isTrending && item.category.name === "TV Series")
  );

  const handleBookmarkToggle = (index, isTrending) => {
    if (isTrending) {
      const updatedTVSeries = [...trendingTVSeries];
      updatedTVSeries[index].isBookmarked = !updatedTVSeries[index].isBookmarked;
      setTrendingTVSeries(updatedTVSeries);
    } else {
      const updatedTVSeries = [...recommendedTVSeries];
      updatedTVSeries[index].isBookmarked = !updatedTVSeries[index].isBookmarked;
      setRecommendedTVSeries(updatedTVSeries);
    }
  };

  return (
    <div className="container">
      <div className="trending">
        <div className="trending-title">
          <h1>Trending TV Series</h1>
        </div>
        <div className="cards-trending">
          {trendingTVSeries.map((item, index) => (
            <CardTrending key={index} {...item} onBookmarkToggle={() => handleBookmarkToggle(index, true)} />
          ))}
        </div>
      </div>

      <div className="recommended">
        <div className="recommended-title">
          <h1>Recommended TV Series for you</h1>
        </div>
        <div className="cards-recommended">
          {recommendedTVSeries.map((item, index) => (
            <CardRecommended key={index} {...item} onBookmarkToggle={() => handleBookmarkToggle(index, false)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageTvSeries;
