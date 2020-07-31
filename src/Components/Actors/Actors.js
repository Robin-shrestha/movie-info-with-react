import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { imgNotFound, moviePoster } from "../utils";
import axios from "axios";
// import Pagination2 from "./Pagination2";

const Actors = () => {
  //   const [moviesPlayedIn, setMoviesPlayedIn] = useState([]);
  const { id } = useParams();
  const actorName = ActorName(id);
  const moviesPlayedIn = MoviesPlayed(id);
  console.log(moviesPlayedIn);

  return (
    <div className="container-fluid sr-container bg-bgc pt-3">
      <h4 style={{ color: "#FFF", textAlign: "center" }}>
        Other movies by {actorName}.
      </h4>

      {/* <Pagination2 totalItems={moviesPlayedIn.length} itemsPerPage={24} /> */}
      {/* <Pagination searchQuery={searchQuery} totalPages={totalPages} /> */}

      <ul className="row justify-content-center sr-row pl-3 mt-4">
        {moviesPlayedIn
          ? moviesPlayedIn.map((item) => {
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

const ActorName = (id) => {
  const [actorName, setActorName] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/person/${id}`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        // console.log(res.data.name);
        setActorName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return actorName;
};

const MoviesPlayed = (id) => {
  const [moviesPlayedIn, setMoviesPlayedIn] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/person/${id}/movie_credits`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        console.log(res);
        setMoviesPlayedIn(res.data.cast);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return moviesPlayedIn;
};

export default Actors;
