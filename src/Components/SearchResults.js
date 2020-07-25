import React, { useContext, useEffect } from "react";
import { movieDataContext } from "../App";
import "./static/Searchresults.scss";
import { Link, useParams } from "react-router-dom";
import { onError, onLoading, imgNotFound, moviePoster } from "./utils";

const SearchResults = () => {
  const movieContext = useContext(movieDataContext);
  const searchTerms = useParams();
  // console.log(searchTerms);
  useEffect(() => {
    return () => {
      console.log("destroy component search results");
      movieContext.dispatch({ type: "ON_RETURN" });
    };
  }, []);

  return (
    <div className="container-fluid sr-container bg-bgc">
      {movieContext.movieDataState.loading ? onLoading() : null}
      {movieContext.movieDataState.error
        ? onError(movieContext.movieDataState.error)
        : null}

      <h4 style={{ color: "#FFF" }}>
        search results for "{searchTerms.searchQuery.split("_").join(" ")}"
      </h4>
      <ul className="row justify-content-center sr-row pl-3 mt-4">
        {movieContext.movieDataState.movieData.map((item) => {
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
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
