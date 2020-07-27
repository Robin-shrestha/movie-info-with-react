import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./static/searchbox.scss";
import { searchQueryContext } from "../App";

const SearchBox = ({ setSearchQuery }) => {
  const [searchContent, setSearchContent] = useState("");
  const searchContext = useContext(searchQueryContext);

  // useEffect(() => {
  //   return searchContext.setSearchQuery("");
  // }, []);
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("asd");
    if (searchContent) {
      searchContext.setSearchQuery(searchContent);
      // history.push("/search_results");
      // history.push(`/search_results/${searchContent.split(" ").join("_")}`);
      history.push(`/search_results/${searchContent.split(" ").join("_")}/1`);
    } else {
      history.push("/movie-info-with-react");
    }
  };
  return (
    <form className="container-searchbox m-3" onSubmit={submitHandler}>
      <input
        type="text"
        className="form-control p-2"
        placeholder="Search movie..."
        value={searchContent}
        onChange={(e) => {
          setSearchContent(e.target.value);
        }}
      />
      {/* <Link
        type="submit"
        className="btn btn-outline-fmv bg-fmv text-white"
        to="/search_results"
        onClick={submitHandler}
      >
        <i className="fa fa-search "></i>
      </Link> */}
      <button
        type="submit"
        className="btn btn-outline-fmv bg-fmv text-white"
        onClick={submitHandler}
      >
        <i className="fa fa-search "></i>
      </button>
    </form>
  );
};

export default SearchBox;
