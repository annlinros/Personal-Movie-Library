import React, { useContext } from "react";
import { MovieContext } from "../../Context";
import MovieSearch from "./MovieSearch";
import MovieItem from "./MovieItem";
import "./Movie.css";

export default function Movie() {
  const { movieIDs, movieFound } = useContext(MovieContext);

  return (
    <React.Fragment>
      <MovieSearch />
      {movieFound ? (
        movieIDs.map(id => <MovieItem id={id} key={id} />)
      ) : (
        <h1
          style={{
            textAlign: "center",
            color: "black"
          }}
        >
       Not Found!
        </h1>
      )}
    </React.Fragment>
  );
}
