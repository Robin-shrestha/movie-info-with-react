import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Header from "./Components/Header";
import Home from "./Components/Home";
import SearchResults from "./Components/SearchResults";

import SearchPage from "./Components/SearchPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

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
        movieData.map((item) => {
          console.log(item);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <SearchPage setSearchQuery={setSearchQuery} />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/search_results">
          <SearchResults movieData={movieData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
