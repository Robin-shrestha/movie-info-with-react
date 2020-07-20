import React, { useState, useEffect } from "react";
import "./static/SearchPage.scss";
import { Link } from "react-router-dom";

const SearchPage = ({ setSearchQuery }) => {
  const [searchContent, setSearchContent] = useState("");

  return (
    <div className="container-searchpage">
      <div className="logo ">
        <h1 className="bg-fmv rounded p-1 mt-4 mb-3 text-white">GETMOVIES</h1>
      </div>
      <div className="input-group mt-3 mb-3 container-searchbox">
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
          <Link
            to="/search_results"
            className="btn btn-outline-fmv bg-fmv"
            onClick={() => {
              setSearchQuery(searchContent);
            }}
          >
            <i className="fa fa-search text-white"></i>
          </Link>
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
