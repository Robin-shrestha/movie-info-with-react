import React, { useState, useEffect, useReducer } from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import SearchPage from "./Components/SearchPage";
import SearchItem from "./Components/SearchItem";
import SearchResult2 from "./Components/SearchResult2";
import Actors from "./Components/Actors/Actors";

export const searchQueryContext = React.createContext();
export const movieDataContext = React.createContext();

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="br-bgc">
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

      <Route exact path="/movie/:id" component={SearchItem}></Route>

      <Route exact path="/people/:id" component={Actors}></Route>

      <searchQueryContext.Provider
        value={{
          searchQuery: searchQuery,
          // setSearchQuery: setSearchQuery,
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
