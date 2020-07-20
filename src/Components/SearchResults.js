import React from "react";

const SearchResults = ({ movieData }) => {
  const moviePoster = (path) => {
    const imgPath = `https://image.tmdb.org/t/p/w200/${path}`;
    return (
      <div>
        <img
          src={imgPath}
          alt="noing"
          style={{ width: "150px" }}
          // onError={(e) => {
          //   e.target.onerror = null;
          //   e.target.src = posternotfound;
          // }}
        />
      </div>
    );
  };
  console.log(movieData);
  //   movieData.map((item) => {
  //     console.log(item);
  //   });
  return (
    <div>
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
