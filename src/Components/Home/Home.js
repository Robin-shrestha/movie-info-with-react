import React, { useState, useEffect } from "react";
import MovieCarousel from "./Carousel/MovieCarousel";
import axios from "axios";

const Home = () => {
  const [genreById, setGenreById] = useState({});
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        // console.log(res);
        var merge = {};
        res.data.genres.map((item) => {
          merge[item["id"]] = item["name"];
        });
        // console.log(merge);
        setGenreById(merge);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <MovieCarousel genreById={genreById} />
    </div>
  );
};

export default Home;
