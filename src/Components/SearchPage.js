import React, { useState, useEffect } from "react";
import "./static/SearchPage.scss";
import { Link } from "react-router-dom";
import Home from "./Home";

const SearchPage = () => {
  const [searchContent, setSearchContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const clickHandler = () => {
    setSearchQuery(searchContent);
  };

  return (
    <div className="container-searchpage">
      <div className="logo ">
        <h1 className="bg-fmv rounded p-1 text-white">GETMOVIES</h1>
      </div>
      <div className="input-group mb-3 container-searchbox">
        <input
          type="text"
          className="form-control p-2"
          placeholder="Search movie..."
          value={searchContent}
          onChange={(e) => {
            setSearchContent(e.target.value);
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-fmv bg-fmv"
            type="button"
            onClick={clickHandler}
          >
            <i className="fa fa-search text-white"></i>.
          </button>
        </div>
      </div>
      <p
        style={{
          fontSize: "1.2em",
          textAlign: "center",
          padding: "1em 1.5em ",
        }}
      >
        getmovies - Just the place for getting reviews of movies and tv series!{" "}
      </p>
      <div className="homebtn">
        <Link to="/Home" className="btn btn-primary btn-lg bg-fmv mt-2 ">
          Go to Home page
        </Link>
      </div>
    </div>
  );
};

export default SearchPage;
