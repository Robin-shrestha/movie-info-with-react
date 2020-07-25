import React, { useEffect, useContext, useState } from "react";
import { apiKey, movieDataContext } from "../App";
import { imgNotFound, onError, onLoading, moviePoster } from "./utils";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./static/SearchItem.scss";

const SearchItem = () => {
  const movieId = useParams();
  const [movieData, setMovieData] = useState([]);
  // const { movieDataState, dispatch } = useContext(movieDataContext);

  // const { loading, error, movieData } = movieDataState;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId.id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        console.log(res);
        setMovieData(res.data);
        // dispatch({ type: "MOVIE_ITEM", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        // if (err) {
        //   dispatch({ type: "ON_ERROR" });
        // }
      });
    // return () => {
    //   dispatch({ type: "ON_RETURN" });
    // };
  }, []);

  useEffect(() => {
    console.log(movieData);
  }, []);

  return (
    <div className="container-fluid p-0 container-item bg-bgc text-white">
      <div className="error-loading">
        {/* {loading ? onLoading() : null} */}
        {/* {error ? onError(error) : null} */}
      </div>
      <div className="container-movie-detail">
        <div className="img-backdrop">
          <img
            src={moviePoster(movieData.backdrop_path)}
            alt={movieData.title}
            onError={imgNotFound}
          />
          <div>
            <h1>{movieData.title}</h1>
            <p>{movieData.tagline}</p>
            <ul>
              {movieData.genres
                ? movieData.genres.map((item) => {
                    return <li key={item.id}>{item.name}</li>;
                  })
                : null}
            </ul>
          </div>
        </div>

        <div className="row pl-5 pr-5 pb-5 movie-detail ">
          <img
            className="offset-xl-1 offset-lg-1 col-xl-3 col-lg-3 col-md-4 col-sm-4 "
            src={moviePoster(movieData.poster_path)}
            alt={movieData.title}
            onError={imgNotFound}
          />
          <div className="offset-xl-1 offset-lg-1 offset-sm-1 col-lg-6 col-md-6 col-sm-6 align-self-center descriptions">
            <p>
              <span>overview:</span> {movieData.overview}
            </p>
            <p>
              <span>Release Date:</span> {movieData.release_date}
            </p>
            <p>
              <span>Box Office Revenue:</span> {movieData.revenue} USD
            </p>
            <p>
              <span>language:</span> {movieData.original_language}
            </p>
            <p>
              <span>adult:</span> {movieData.adult ? "true" : "false"}
            </p>
            <ul>
              <span>movie by:</span>

              {movieData.production_companies
                ? movieData.production_companies.map((item) => {
                    return <li key={item.id}>{item.name} </li>;
                  })
                : null}
            </ul>

            <p>
              ratings: {movieData.vote_average}/10 amongst{" "}
              {movieData.vote_count} voters
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
