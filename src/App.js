import React from "react";
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
  return (
    <Router>
      <Header />
      <switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
      </switch>
    </Router>
    // <div>
    //   <div>
    //     <Header />
    //   </div>
    //   <div>
    //     <SearchPage />
    //   </div>
    // </div>
  );
}

export default App;
