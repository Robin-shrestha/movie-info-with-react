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
    <div className=" p-2 bg-bgc">
      {movieContext.movieDataState.loading ? onLoading() : null}
      {movieContext.movieDataState.error
        ? onError(movieContext.movieDataState.error)
        : null}

      <h4 style={{ color: "#FFF" }}>
        search results for "{searchTerms.searchQuery.split("_").join(" ")}"
      </h4>
      <ul className="container-sr">
        {movieContext.movieDataState.movieData.map((item) => {
          return (
            <li key={item.id} className="col-lg-2 col-md-3 col-sm-4 col-8 m-3 ">
              <Link to={`/movie/${item.id}`}>
                <img
                  // src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
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
