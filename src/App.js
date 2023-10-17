import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import PageMovies from "./components/Pages/PageMovies/pageMovies";
import HomePage from "./components/Pages/HomePage/homePage";
import PageSearch from "./components/Pages/PageSearch/pageSearch";
import PageTvSeries from "./components/Pages/PageTvSeries/pageTvSeries";
import PageBookmarked from "./components/Pages/PageBookmarked/pageBookmarked";
import "./style/app.css";
import "./style/common.css";
import data from "./data/data.json";


function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <PageSearch />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pageMovies" element={<PageMovies />} />
          <Route path="/pageTvSeries" element={<PageTvSeries />} />
          <Route path="/pageBookmarked" element={<PageBookmarked />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;