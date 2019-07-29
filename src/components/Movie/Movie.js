import React, { useEffect, useState } from "react";
import "./Movie.css";

const Movie = props => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    displayMovie();
  });


  const displayMovie = () => {
    fetch(`http://www.omdbapi.com/?apikey=5093026f&i=${props.id}&plot=short`)
      .then(res => res.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => console.log(error));
  };

  // Add movie to the library.
  const addToLibrary = () => {
    props.libraryItem(movie)
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
