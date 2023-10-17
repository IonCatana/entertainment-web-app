import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Recupera lo stato da localStorage all'avvio
  useEffect(() => {
    const savedActiveIndex = localStorage.getItem("activeIndex");
    if (savedActiveIndex !== null) {
      setActiveIndex(parseInt(savedActiveIndex));
    }
  }, []); // L'array vuoto [] fa sì che questo effetto venga eseguito solo all'avvio

  // Gestisce il click su un elemento del menu
  const handleItemClick = (index) => {
    // Aggiorna lo stato locale
    setActiveIndex(index);
    // Salva l'indice dell'elemento cliccato nel localStorage
    localStorage.setItem("activeIndex", index);
  };

  return (
    <header>
      <div className="menu">
        <div className="logo">
          <img src="/entertainment-web-app/assets/logo.svg" alt="Logo" />
        </div>
        <nav>
          <ul className="menu-list">
            <li className={`menu-list__item ${activeIndex === 0 ? "active" : ""}`}>
              <Link to="/" onClick={() => handleItemClick(0)}>
                <img src="/entertainment-web-app/assets/icon-nav-home.svg" alt="homePage" />
              </Link>
            </li>
            <li className={`menu-list__item ${activeIndex === 1 ? "active" : ""}`}>
              <Link to="/pageMovies" onClick={() => handleItemClick(1)}>
                <img src="/entertainment-web-app/assets/icon-nav-movies.svg" alt="pageMovies" />
              </Link>
            </li>
            <li className={`menu-list__item ${activeIndex === 2 ? "active" : ""}`}>
              <Link to="/pageTvSeries" onClick={() => handleItemClick(2)}>
                <img src="/entertainment-web-app/assets/icon-nav-tv-series.svg" alt="pageTvSeries" />
              </Link>
            </li>
            <li className={`menu-list__item ${activeIndex === 3 ? "active" : ""}`}>
              <Link to="/pageBookmarked" onClick={() => handleItemClick(3)}>
                <img src="/entertainment-web-app/assets/icon-nav-bookmark.svg" alt="pageMovies" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Login */}
      <div className="login">
        <div className="avatar">
          <img src="/entertainment-web-app/assets/image-avatar.png" alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
