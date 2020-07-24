import React, { useEffect, useContext } from "react";
import { apiKey, movieDataContext } from "../App";
import { imgNotFound, onError, onLoading, moviePoster } from "./utils";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchItem = () => {
  const movieId = useParams();
  const { movieDataState, dispatch } = useContext(movieDataContext);
  const { loading, error, movieData } = movieDataState;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId.id}`, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: "MOVIE_ITEM", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        // if (err) {
        //   dispatch({ type: "ON_ERROR" });
        // }
      });
    return () => {
      dispatch({ type: "ON_RETURN" });
    };
  }, []);

  useEffect(() => {
    console.log(movieData);
  }, [movieDataState]);

  return (
    <div>
      <div>
        {/* {loading ? onLoading() : null} */}
        {/* {error ? onError(error) : null} */}
      </div>
      <div>
        <img
          // src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
          src={moviePoster(movieData.backdrop_path)}
          alt={movieData.title}
          // style={{ width: "150px" }}
          onError={imgNotFound}
        />
        <h2>{movieData.title}</h2>
        <p>{movieData.tagline}</p>
        <ul>
          <p>genres:</p>
          {movieData.genres
            ? movieData.genres.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })
            : null}
        </ul>
        <p>Release Date: {movieData.release_date}</p>
        <p>Box Office Revenue: {movieData.revenue} USD</p>
        <p>language: {movieData.original_language}</p>
        <p>adult: {movieData.adult}</p>
        <ul>
          <p>movie by;</p>
          {movieData.production_companies
            ? movieData.production_companies.map((item) => {
                return <li key={item.id}>{item.name} </li>;
              })
            : null}
        </ul>
        <img
          // src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
          src={moviePoster(movieData.poster_path)}
          alt={movieData.title}
          // style={{ width: "150px" }}
          onError={imgNotFound}
        />
        <p>
          ratings: {movieData.vote_average}/10 amongst {movieData.vote_count}{" "}
          voters
        </p>

        <p>overview: {movieData.overview}</p>
      </div>
    </div>
  );
};

export default SearchItem;
