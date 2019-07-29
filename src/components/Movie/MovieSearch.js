import React from "react";
import Movie from "./Movie";
import "./Movie.css";

export default function MovieSearch({movieIDs,movieFound,handleSearch,getQuery,libraryItem}) {
  return (
    <div>
      <div className="searchBar">
        <input
          className="searchBox"
          type="search"
          placeholder="Type in a movie name.."
          onChange={handleSearch}
        />
        <button
          className="searchBtn"
          type="submit"
          onClick={getQuery}
        >
          GO!
        </button>
      </div>
      {movieFound ? (
        movieIDs.map(id => (
          <Movie id={id} key={id} libraryItem={libraryItem} />
        ))
      ) : (
        <h1 style={{ textAlign: "center", color: "black" }}>
          Movie not found,Search again!
        </h1>
      )}
    </div>
  );
}
