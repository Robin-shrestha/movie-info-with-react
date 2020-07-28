import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Credits = ({ movieId }) => {
  const [castMember, setCastMember] = useState([]);
  //   const [crewMember, setCrewMember] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => {
        console.log(res);
        setCastMember(res.data.cast);
        // setCrewMember(res.data.crew);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ul>
      <span>Credits:</span>
      {castMember.map((cast, index) => {
        if (index < 6) {
          return (
            <li style={{ listStyle: "none", margin: "0 8px" }} key={index}>
              <Link to="#" className="cast-list text-fmv">
                {cast.name}
              </Link>
              ,{" "}
            </li>
          );
        }
      })}
      {/* <Link to="#" className="all-cast-list">
        list of all cast and characters
      </Link> */}
    </ul>
  );
};

export default Credits;
