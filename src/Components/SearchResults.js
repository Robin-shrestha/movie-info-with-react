import React from "react";
import SearchBox from "./SearchBox";

const SearchResults = ({ movieData }) => {
  const moviePoster = (path) => {
    const imgPath = `https://image.tmdb.org/t/p/w200/${path}`;
    return (
      <div>
        <img
          src={imgPath}
          alt="noimg"
          style={{ width: "150px" }}
          // onError={(e) => {
          //   e.target.onerror = null;
          //   e.target.src = posternotfound;
          // }}
        />
      </div>
    );
  };

  return (
    <div className="p-2">
      <ul>
        {movieData.map((item) => {
          console.log(item);
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              {moviePoster(item.poster_path)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
