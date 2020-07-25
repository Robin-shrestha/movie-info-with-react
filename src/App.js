import React, { useState, useEffect, useReducer } from "react";
import "./App.scss";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect,
} from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import SearchResults from "./Components/SearchResults";
import SearchPage from "./Components/SearchPage";
import SearchItem from "./Components/SearchItem";

export const searchQueryContext = React.createContext();
export const movieDataContext = React.createContext();

// export const apiKey = "b13b73e49a3f6baa037e1e91855f9c63";

const initialMovieDatastate = {
  loading: true,
  error: "",
  movieData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MOVIE_SEARCH_SUCCESS":
      return { ...state, loading: false, error: "", movieData: action.payload };
    case "ON_RETURN":
      return { ...state, loading: true, movieData: [] };
    case "ON_ERROR":
      return { ...state, loading: false, error: "error" };
    case "MOVIE_ITEM":
      return { ...state, loading: false, error: "", movieData: action.payload };
    default:
      return state;
  }
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [movieDataState, dispatch] = useReducer(reducer, initialMovieDatastate);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          query: searchQuery,
        },
      })
      .then((res) => {
        // console.log(res);
        dispatch({ type: "MOVIE_SEARCH_SUCCESS", payload: res.data.results });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ON_ERROR" });
      });
  }, [searchQuery]);

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
        <Route exact path="/" component={SearchPage}></Route>
      </searchQueryContext.Provider>

      <Route exact path="/Home" component={Home}></Route>

      <Route exact path="/search_results/:searchQuery">
        {searchQuery ? (
          <movieDataContext.Provider
            value={{ movieDataState: movieDataState, dispatch: dispatch }}
          >
            <SearchResults />
          </movieDataContext.Provider>
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <movieDataContext.Provider
        value={{ movieDataState: movieDataState, dispatch: dispatch }}
      >
        <Route exact path="/movie/:id" component={SearchItem}></Route>
      </movieDataContext.Provider>
    </div>
  );
}

export default App;
