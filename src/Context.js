import React, { useState, createContext } from "react";

const API_KEY = "5093026f";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movieIDs, setMovieIDs] = useState([]);
  const [search, setSearch] = useState("");
  const [movieFound, setMovieFound] = useState();
  const [query, setQuery] = useState("Flipped");
  const [movieLibrary, setMovieLibrary] = useState([]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const getQuery = () => {
    setQuery(search);
  };

  const getMovies = async () => {
    const controller = new AbortController();
    const signal = controller.signal;

    const apiResponse = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
      { signal: signal }
    );
    const data = await apiResponse.json();
    if (data.Response === "True") {
      setMovieIDs(data.Search.map(movie => movie.imdbID));
      setMovieFound(true);
    } else {
      setMovieFound(false);
    }

    return function cleanup() {
      controller.abort();
      console.log("cleanup works");
    };
  };

  return (
    <MovieContext.Provider
      value={{
        movieIDs,
        movieFound,
        query,
        getMovies,
        getQuery,
        handleSearch,
        movieLibrary,
        setMovieLibrary
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
