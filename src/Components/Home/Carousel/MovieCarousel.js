import React, { useEffect, useState } from "react";
import { moviePoster, imgNotFound } from "../../utils";
import { Link } from "react-router-dom";
import "./Carousel.scss";
import axios from "axios";
import Indicator from "./Indicator";
import Arrow from "./Arrow";

const MovieCarousel = ({ genreById }) => {
  const [nowPlaying, setNowPlaying] = useState([]);
  // const path = nowPlaying[0].poster_path;
  // console.log(nowPlaying[0]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/now_playing", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        // console.log(res.data.results);
        setNowPlaying(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <Arrow
          direction="left"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <ul className="slides">
          {nowPlaying.slice(0, 10).map((slide, index) => {
            return (
              <li
                className={
                  index == activeIndex ? "slide slide--active" : "slide"
                }
                // className="slide"
                key={index}
              >
                <div className="img-backdrop">
                  <img
                    src={moviePoster(slide.backdrop_path)}
                    alt={slide.title}
                    onError={imgNotFound}
                  />
                  <div>
                    <h1>
                      <Link to={`/movie/${slide.id}`}>
                        {slide.title} ({slide.release_date.split("-")[0]})
                      </Link>
                    </h1>
                    <p>
                      <span>TMDb </span>
                      {slide.vote_average}
                    </p>
                    <ul>
                      <span>Genre: </span>{" "}
                      {slide.genre_ids
                        ? slide.genre_ids.map((item, index) => {
                            return <li key={index}>{genreById[item]}</li>;
                          })
                        : null}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <Arrow
          direction="right"
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Indicator
          nowPlaying={nowPlaying}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
};

export default MovieCarousel;
