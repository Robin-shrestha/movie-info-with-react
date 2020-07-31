import React from "react";
import "./static/SearchPage.scss";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const SearchPage = () => {
  return (
    <div className="container-searchpage">
      <div className="logo ">
        <h1 className="bg-fmv rounded p-1 mt-4 mb-3 text-white">GETMOVIES</h1>
      </div>

      <SearchBox />

      <p
        style={{
          fontSize: "1.2em",
          textAlign: "center",
          padding: "1em 1.5em ",
        }}
      >
        getmovies - Just the place for getting reviews of movies!{" "}
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
