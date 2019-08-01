import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Library from "./components/Library";
import Header from "./components/Header/Header.js";
import MovieSearch from "./components/Movie/MovieSearch";

const App = () => {
  const API_KEY = "5093026f";

  const [movieIDs, setMovieIDs] = useState([]);
  const [search, setSearch] = useState("");
  const [movieFound, setMovieFound] = useState();
  const [query, setQuery] = useState("Flipped");
  const [movieLibrary, setMovieLibrary] = useState([]);

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async () => {
    const apiResponse = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const data = await apiResponse.json();
    console.log(data);

    if (data.Response === "True") {
      setMovieIDs(data.Search.map(movie => movie.imdbID));
      setMovieFound(true);
    } else {
      setMovieFound(false);
    }
  };

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const getQuery = () => {
    setQuery(search);
  };

  const addMovieToLibrary = movie => {
    const newMovie = {
      title: movie.Title,
      year: movie.Year,
      plot: movie.Plot,
      poster: movie.Poster,
      imdbRating: movie.imdbRating
    };
    const newMovieLibrary = [...movieLibrary];

    newMovieLibrary.push(newMovie);
    setMovieLibrary(newMovieLibrary);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <MovieSearch
                handleSearch={handleSearch}
                getQuery={getQuery}
                libraryItem={addMovieToLibrary}
                movieIDs={movieIDs}
                movieFound={movieFound}
              />
            )}
          />
          <Route
            path="/library"
            render={() =>
              movieLibrary.map(movie => <Library movieItem={movie} />)
            }
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
