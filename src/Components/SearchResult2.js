import React, { useState, useEffect, useContext, useReducer } from "react";
import { useParams, Link } from "react-router-dom";
import { searchQueryContext } from "../App";
import { imgNotFound, moviePoster } from "./utils";
import Pagination from "./Pagination";
import axios from "axios";

const initialSearchStater = { page: 1, movieData: [] };

const searchReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const SearchResult2 = () => {
  const params = useParams();
  const { searchQuery, setSearchQuery } = useContext(searchQueryContext);
  const [totalPages, setTotalPages] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  // initial api query
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query: searchQuery,
          page: params.pageNo,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setTotalPages(res.data.total_pages);
        setSearchResults(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery, params.pageNo]);

  return (
    <div className="container-fluid sr-container bg-bgc">
      <h4 style={{ color: "#FFF" }}>search results for "{searchQuery}"</h4>

      <Pagination searchQuery={searchQuery} totalPages={totalPages} />

      <ul className="row justify-content-center sr-row pl-3 mt-4">
        {searchResults
          ? searchResults.map((item) => {
              return (
                <li
                  key={item.id}
                  className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 sr-col pl-1 pr-1 mb-2 "
                >
                  <Link to={`/movie/${item.id}`}>
                    <img
                      src={moviePoster(item.poster_path)}
                      alt={item.title}
                      // style={{ width: "150px" }}
                      onError={imgNotFound}
                    />
                    <p className="">{item.title}</p>
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default SearchResult2;
