import React from "react";
import "./static/header.scss";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="container-header p-2">
      <div className="header-left">
        <div className="btn btn-default genre-list">
          <i className="fa fa-list bg-bgicon p-1 rounded "></i>
        </div>
        <h2 className="bg-fmv rounded p-1">
          <Link className="link" to="/">
            GETMOVIES
          </Link>
        </h2>
      </div>
      <div className="header-right">
        <span className="p-1">
          <Link to="/">Login</Link>
        </span>
        {/* <span className="header-searchbox">
          <SearchBox />
        </span> */}
      </div>
    </div>
  );
};

export default Header;
