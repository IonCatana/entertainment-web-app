import React, { useState } from "react";
import "../../style/common.css";
import "./cardRecommended.css";
import data from "../../data/data.json";

const Card = ({ title, year, category, rating, thumbnail, isBookmarked, bookmarkIcon, onBookmarkToggle }) => {
  const { small, medium, large } = thumbnail.regular;
  const categoryIcon = category.icon;
  const categoryName = category.name;

  const [items, setItems] = useState(data);
  const handleBookmarkToggle = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isBookmarked = !updatedItems[index].isBookmarked;
    setItems(updatedItems);
  };

  return (
    <div className="card-recommanded">
      <div className="card-image">
        <img src={large} alt={`Thumbnail for ${title}`} />
        <div className="card-play">
          <div className="card-play-icon">
            <img src="../assets/icon-play.svg" alt="Play Icon" />
            <span>Play</span>
          </div>
        </div>
      </div>
      <div className="card-bookmark" onClick={onBookmarkToggle}>
        {isBookmarked ? (
          <img src="../assets/icon-bookmark-full.svg" alt="Bookmark Icon" />
        ) : (
          <img src="../assets/icon-bookmark-empty.svg" alt="Bookmark Icon" />
        )}
      </div>


      <div className="card-text">
        <div className="card-info">
          <div className="card-year">{year}</div>
          <div className="card-category">
            <div className="category-icon">
              <img src={categoryIcon} alt={categoryName} />
            </div>
            <div className="category-text">{categoryName}</div>
          </div>
          <div className="card-rating">{rating}</div>
        </div>
        <div className="card-title">{title}</div>
      </div>
    </div>
  );
};

export default Card;