import React, { useContext, useEffect } from "react";
import { movieDataContext } from "../App";
import "./static/Searchresults.scss";
import { Link, useParams } from "react-router-dom";
import { onError, onLoading, imgNotFound, moviePoster } from "./utils";
import Pagination from "./Pagination";

const SearchResults = () => {
  const { movieDataState, dispatch } = useContext(movieDataContext);
  const { loading, error, movieData } = movieDataState;
  const searchTerms = useParams();
  // useEffect(() => {
  //   return () => {
  //     console.log("destroy component search results");
  //     movieContext.dispatch({ type: "ON_RETURN" });
  //   };
  // }, []);

  return (
    <div className="container-fluid sr-container bg-bgc">
      {loading ? onLoading() : null}
      {error ? onError(error) : null}

      <h4 style={{ color: "#FFF" }}>
        search results for "{searchTerms.searchQuery.split("_").join(" ")}"
      </h4>
      <Pagination totalPages={movieData.total_pages} />

      <ul className="row justify-content-center sr-row pl-3 mt-4">
        {movieData.results
          ? movieData.results.map((item) => {
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

export default SearchResults;
