import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { imgNotFound, moviePoster } from "../utils";

const UpcomingMovies = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/upcoming", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setUpcoming(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container-fluid sr-container bg-bgc mb-3">
      <h3 className="text-fmv pl-4">Upcoming movies</h3>

      {/* <Pagination searchQuery={searchQuery} totalPages={totalPages} /> */}

      <ul className="row justify-content-center sr-row pl-3 mt-4">
        {upcoming
          ? upcoming.slice(0, 18).map((item) => {
              return (
                <li
                  key={item.id}
                  className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12 sr-col pl-1 pr-1 mb-2 "
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

export default UpcomingMovies;
