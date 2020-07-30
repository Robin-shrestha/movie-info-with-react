import React, { useEffect, useState } from "react";
import { moviePoster, imgNotFound } from "../../utils";
import { Link } from "react-router-dom";
import "./Carousel.scss";
import axios from "axios";

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
        console.log(res.data.results);
        setNowPlaying(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;
    let slideLength = 9; //will change later
    if (index < 1) {
      index = slideLength;
    } else {
      --index;
    }
    setActiveIndex(index);
  };
  const goToNextSlide = (e) => {
    e.preventDefault();
    let index = activeIndex;
    let slideLength = 9; //will change later

    if (index === slideLength) {
      index = 0;
    } else {
      ++index;
    }
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <a
          href="#"
          className="carousel__arrow carousel__arrow--left"
          onClick={(e) => goToPrevSlide(e)}
        >
          <span className="fa fa-2x fa-angle-left" />
        </a>
        <ul className="carousel__slides">
          {nowPlaying.slice(0, 10).map((slide, index) => {
            return (
              <li
                className={
                  index == activeIndex
                    ? "carousel__slide carousel__slide--active"
                    : "carousel__slide"
                }
                key={index}
              >
                <div className="img-backdrop">
                  <img
                    src={moviePoster(slide.poster_path)}
                    alt={slide.title}
                    onError={imgNotFound}
                  />
                  <div>
                    <h1>
                      {slide.title} ({slide.release_date.split("-")[0]})
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
        <a
          href="#"
          className="carousel__arrow carousel__arrow--right"
          onClick={(e) => goToNextSlide(e)}
        >
          <span className="fa fa-2x fa-angle-right" />
        </a>
        <ul className="carousel__indicators">
          {nowPlaying.slice(0, 10).map((slide, index) => {
            return (
              <li key={index}>
                <a
                  className={
                    index == activeIndex
                      ? "carousel__indicator carousel__indicator--active"
                      : "carousel__indicator"
                  }
                  onClick={(e) => goToSlide(index)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MovieCarousel;
