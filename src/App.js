import React, { useState, useEffect, useReducer } from "react";
import "./App.scss";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home/Home";
// import SearchResults from "./Components/SearchResults";
import SearchPage from "./Components/SearchPage";
import SearchItem from "./Components/SearchItem";
import SearchResult2 from "./Components/SearchResult2";

export const searchQueryContext = React.createContext();
export const movieDataContext = React.createContext();

// const initialMovieDatastate = {
//   loading: true,
//   error: "",
//   movieData: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "MOVIE_SEARCH_SUCCESS":
//       return { ...state, loading: false, error: "", movieData: action.payload };
//     case "ON_RETURN":
//       return { ...state, loading: true, movieData: [] };
//     case "ON_ERROR":
//       return { ...state, loading: false, error: "error" };
//     case "MOVIE_ITEM":
//       return { ...state, loading: false, error: "", movieData: action.payload };
//     default:
//       return state;
//   }
// };

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // const [movieDataState, dispatch] = useReducer(reducer, initialMovieDatastate);

  // useEffect(() => {
  //   axios
  //     .get("https://api.themoviedb.org/3/search/movie", {
  //       params: {
  //         api_key: process.env.REACT_APP_API_KEY,
  //         query: searchQuery,
  //       },
  //     })
  //     .then((res) => {
  //       // console.log(res);
  //       dispatch({ type: "MOVIE_SEARCH_SUCCESS", payload: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // dispatch({ type: "ON_ERROR" });
  //     });
  // }, [searchQuery]);

  return (
    <div>
      <searchQueryContext.Provider
        value={{
          searchQuery: searchQuery,
          setSearchQuery: setSearchQuery,
        }}
      >
        <Header />
      </searchQueryContext.Provider>
      {/* route components  */}

      <searchQueryContext.Provider
        value={{
          searchQuery: searchQuery,
          setSearchQuery: setSearchQuery,
        }}
      >
        <Route
          exact
          path="/movie-info-with-react"
          component={SearchPage}
        ></Route>
      </searchQueryContext.Provider>

      <Route exact path="/Home" component={Home}></Route>

      {/* <Route exact path="/search_results/:searchQuery">
        <movieDataContext.Provider
          value={{ movieDataState: movieDataState, dispatch: dispatch }}
        >
          <SearchResults />
        </movieDataContext.Provider>
      </Route> */}

      {/* <movieDataContext.Provider
        value={{ movieDataState: movieDataState, dispatch: dispatch }}
      > */}
      <Route exact path="/movie/:id" component={SearchItem}></Route>
      {/* </movieDataContext.Provider> */}

      <searchQueryContext.Provider
        value={{
          searchQuery: searchQuery,
          setSearchQuery: setSearchQuery,
        }}
      >
        <Route
          exact
          path="/search_results/:searchQuery/:pageNo"
          component={SearchResult2}
        ></Route>
      </searchQueryContext.Provider>
    </div>
  );
}

export default App;
