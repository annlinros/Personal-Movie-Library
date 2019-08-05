import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {

  const [search, setSearch] = useState("");
  const [movieLibrary, setMovieLibrary] = useState([]);
  const [url, setUrl] = useState(
    // `http://www.omdbapi.com/?apikey=5093026f&s=Flipped`
  );

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const getUrl = () => {
    setUrl(`http://www.omdbapi.com/?apikey=5093026f&s=${search}`);
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
