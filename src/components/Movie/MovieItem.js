import React, { useEffect, useState, useContext } from "react";
import { MovieContext } from "../../Context";
// import "./Movie.css";
import { Col, Card, Button } from "react-bootstrap";

const MovieItem = ({ id }) => {
  const [movie, setMovie] = useState({});
  const { movieLibrary, setMovieLibrary } = useContext(MovieContext);
  //  makes another API call based on the movie Id recieved as prop.
  useEffect(() => {
    const displayMovie = () => {
      fetch(`http://www.omdbapi.com/?apikey=5093026f&i=${id}&plot=short`)
        .then(res => res.json())
        .then(data => {
          setMovie(data);
        })
        .catch(error => console.log(error));
    };
    displayMovie();
  }, [id]);

  // Add movie to the library when user clicks 'Add to library' button.

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
    console.log("lib works", movieLibrary);
  };
  // renders the individual movie item
  const { Poster, Year, Title, imdbRating, Plot } = movie;

  return (
    <Col xs={12} md={6} lg={4}>
      <Card
        className="mx-auto p-2 mb-1"
        border="secondary"
        style={{ height: "auto" }}
      >
        <Card.Img style={{ height: "12rem" }} src={Poster} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Subtitle className="mb-2">
            Rating : {imdbRating}
          </Card.Subtitle>{" "}
          <Card.Subtitle>Year: {Year}</Card.Subtitle>
          <Card.Text>{Plot}</Card.Text>
          <Button variant="success" onClick={addToLibrary}>
            Add to library
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieItem;
