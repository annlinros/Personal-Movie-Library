import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Library from "./components/Library";
import Header from "./components/Header/Header.js";
import MovieSearch from "./components/Movie/MovieSearch";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <MovieSearch />} />
          <Route path="/library" render={() => <Library />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
