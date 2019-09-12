import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  // State declarations
  const [search, setSearch] = useState("");
  const [movieLibrary, setMovieLibrary] = useState([]);
  const [url, setUrl] = useState();
  // `http://www.omdbapi.com/?apikey=5093026f&s=Flipped`;

  // Handles  search by user
  const handleSearch = e => {
    setSearch(e.target.value);
  };
  //   sets the state url with the user input
  const getUrl = e => {
    e.preventDefault();
    setUrl(`https://www.omdbapi.com/?apikey=5093026f&s=${search}`);
  };

  return (
    <MovieContext.Provider
      value={{
        url,
        getUrl,
        handleSearch,
        movieLibrary,
        setMovieLibrary
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
