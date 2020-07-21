import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./static/searchbox.scss";
import { searchQueryContext } from "../App";

const SearchBox = ({ setSearchQuery }) => {
  const [searchContent, setSearchContent] = useState("");
  const searchContext = useContext(searchQueryContext);

  return (
    <form className="container-searchbox m-3">
      <input
        type="text"
        className="form-control p-2"
        placeholder="Search movie..."
        value={searchContent}
        onChange={(e) => {
          setSearchContent(e.target.value);
        }}
      />
      <Link
        className="btn btn-outline-fmv bg-fmv text-white"
        type="submit"
        to="/search_results"
        onClick={() => {
          searchContext.setSearchQuery(searchContent);
        }}
      >
        <i className="fa fa-search "></i>
      </Link>
    </form>
  );
};

export default SearchBox;
