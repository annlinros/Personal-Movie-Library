import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Library from "./components/Library";
import { MovieProvider } from "./Context";
import Header from "./components/Header/Header.js";
import MovieSearch from "./components/Movie/MovieSearch";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <MovieProvider>
            <Route path="/" exact>
              <MovieSearch />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
          </MovieProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
