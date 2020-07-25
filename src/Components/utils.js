import React from "react";
import posternotfound from "./static/Images/posterNotFound.jpg";

export const moviePoster = (path) => {
  return `https://image.tmdb.org/t/p/w200${path}`;
};

export const imgNotFound = (e) => {
  e.target.onerror = null;
  e.target.src = posternotfound;
};

export const onLoading = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>LOADING...</h1>
    </div>
  );
};

export const onError = (errorMsg) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{errorMsg}</h1>
    </div>
  );
};
