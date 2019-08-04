import React, { useEffect, useState, useContext } from "react";
import { MovieContext } from "../../Context";
import "./Movie.css";

const MovieItem = props => {
  const [movie, setMovie] = useState({});

  const {movieIDs, movieLibrary, setMovieLibrary } = useContext(
    MovieContext
  );

  useEffect(() => {
    displayMovie();
  },[movieIDs]);

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
    console.log("lib works")
  };

  const { Poster, Year, Title, imdbRating, Plot } = movie;

  return (
    <React.Fragment>
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
       
    </React.Fragment>
  );
};

export default MovieItem;
