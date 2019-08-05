import React, { useContext,useEffect,useState} from "react";
import { MovieContext } from "../../Context";
import MovieSearch from "./MovieSearch";
import MovieItem from "./MovieItem";
import "./Movie.css";

export default function Movie() {
  
  const { url } = useContext(MovieContext);

  const [movieIDs, setMovieIDs] = useState([]);
  const [movieFound, setMovieFound] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
    try {
      const apiResponse = await fetch(url);
      const data = await apiResponse.json();
      console.log(data);

      if (data.Response === "True") {
        setMovieIDs(data.Search.map(movie => movie.imdbID));
        setMovieFound(true);
      } else {
        setMovieFound(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
    getMovies();
  }, [url]);


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
