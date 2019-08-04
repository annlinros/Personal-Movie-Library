import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MovieProvider } from "./Context";
import Header from "./components/Header/Header.js";
import Movie from "./components/Movie/Movie";
import Library from "./components/Library";

const App = () => {
  return (
    <div className="App">
      <MovieProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Movie}>
              <Movie />
            </Route>
            <Route path="/library" component={Library}>
              <Library />
            </Route>
          </Switch>
        </Router>
      </MovieProvider>
    </div>
  );
};

export default App;
