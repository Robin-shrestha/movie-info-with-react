import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./Components/Header";
import Home from "./Components/Home";

import SearchPage from "./Components/SearchPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // const clickHandler = (e) => {
  //   setSearchQuery(e.value.target);
  // };

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
      </Switch>
    </Router>
  );
}

export default App;
