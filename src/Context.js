import React, { useState, createContext } from "react";

const API_KEY = "5093026f";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movieIDs, setMovieIDs] = useState([]);
  const [search, setSearch] = useState("");
  const [movieFound, setMovieFound] = useState("");
  const [query, setQuery] = useState("");
  const [movieLibrary, setMovieLibrary] = useState([]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const getQuery = () => {
    setQuery(search);
  };

  const getMovies = async () => {
    try {
      const apiResponse = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`      );
      const data = await apiResponse.json();
      console.log(data);

      if (data.Response === "True") {
        setMovieIDs(data.Search.map(movie => movie.imdbID));
      } else {
        setMovieFound("Movie not Found! Search again");
      }
    } catch (error) {
      console.log(error);
    }
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
