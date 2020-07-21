import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import SearchResults from "./Components/SearchResults";
import SearchPage from "./Components/SearchPage";

export const searchQueryContext = React.createContext();

const apiKey = "b13b73e49a3f6baa037e1e91855f9c63";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: apiKey,
          query: searchQuery,
        },
      })
      .then((res) => {
        console.log(res);
        setMovieData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery]);

  return (
    <Router>
      <searchQueryContext.Provider
        value={{ searchQuery: searchQuery, setSearchQuery: setSearchQuery }}
      >
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/search_results">
            <SearchResults movieData={movieData} />
          </Route>
        </Switch>
      </searchQueryContext.Provider>
    </Router>
  );
}

export default App;
