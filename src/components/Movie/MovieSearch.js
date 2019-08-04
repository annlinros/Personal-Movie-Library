import React,{useContext,useEffect} from "react";
import { MovieContext } from "../../Context";

export default function MovieSearch() {

  const { query,getQuery, handleSearch,getMovies } = useContext(MovieContext);

  useEffect(() => {
    getMovies();
  }, [query]);

  return (
    <div className="searchBar">
      <input
        className="searchBox"
        type="search"
        placeholder="Type in a movie name.."
        onChange={handleSearch}
      />
      <button className="searchBtn" type="submit" onClick={getQuery}>
        GO!
      </button>
    </div>
  );
}
