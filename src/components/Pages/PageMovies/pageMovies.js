import React, { useState } from "react";
import CardRecommended from "../../CardRecommended/cardRecommended";
import CardTrending from "../../CardTrending/cardTrending";
import ".././HomePage/homePage.css";
import data from "../../../data/data.json";

const PageMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState(
    data.filter((item) => item.isTrending && item.category.name === "Movie")
  );

  const [recommendedMovies, setRecommendedMovies] = useState(
    data.filter((item) => !item.isTrending && item.category.name === "Movie")
  );

  const handleBookmarkToggle = (index, isTrending) => {
    if (isTrending) {
      const updatedMovies = [...trendingMovies];
      updatedMovies[index].isBookmarked = !updatedMovies[index].isBookmarked;
      setTrendingMovies(updatedMovies);
    } else {
      const updatedMovies = [...recommendedMovies];
      updatedMovies[index].isBookmarked = !updatedMovies[index].isBookmarked;
      setRecommendedMovies(updatedMovies);
    }
  };

  return (
    <div className="container">
      <div className="trending">
        <div className="trending-title">
          <h1>Trending Movies</h1>
        </div>
        <div className="cards-trending">
          {trendingMovies.map((item, index) => (
            <CardTrending key={index} {...item} onBookmarkToggle={() => handleBookmarkToggle(index, true)} />
          ))}
        </div>
      </div>

      <div className="recommended">
        <div className="recommended-title">
          <h1>Recommended Movies for you</h1>
        </div>
        <div className="cards-recommended">
          {recommendedMovies.map((item, index) => (
            <CardRecommended key={index} {...item} onBookmarkToggle={() => handleBookmarkToggle(index, false)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageMovies;
