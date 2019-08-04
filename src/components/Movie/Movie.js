import React, { useEffect, useState, useContext } from "react";
import { MovieContext } from "../../Context";

import "./Movie.css";

const Movie = props => {
  const [movie, setMovie] = useState({});

  const { movieLibrary, setMovieLibrary } = useContext(MovieContext);

  useEffect(() => {
    displayMovie();
  });

  const displayMovie = () => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`http://www.omdbapi.com/?apikey=5093026f&i=${props.id}&plot=short`, {
      signal
    })
      .then(res => res.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => console.log(error));

    // clean up function
    return function cleanup() {
      console.log("cleanup works");

      controller.abort();
    };
  };

  // Add movie to the library.

  const addToLibrary = () => {
    const newMovie = {
      id: movie.imdbID,
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

  const { Poster, Year, Title, imdbRating, Plot } = movie;

  return (
    <div className="movie-item-container">
      <div className="image-container">
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${Poster})` }}
        />
      </div>
      <div className="movie-info">
        <h1>{Title}</h1>
        <p>Year: {Year}</p>
        <p>Rating: {imdbRating} / 10</p>
        <p className="plot">{Plot}</p>
        <button className="addMovieBtn" onClick={addToLibrary}>
          {" "}
          + Add Movie
        </button>
      </div>
    </div>
  );
};

export default Movie;
