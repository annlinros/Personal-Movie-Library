import React,{useContext} from "react";
import { MovieContext } from "../../Context";

export default function MovieSearch() {

  const { getUrl, search, handleSearch } = useContext(MovieContext);
  
  // Handles the search by user.
  return (
    <div className="searchBar">
      <input
        className="searchBox"
        type="search"
        placeholder="Type in a movie name.."
        value={search}
        onChange={handleSearch}
      />
      <button className="searchBtn" type="submit" onClick={getUrl}>
        GO!
      </button>
    </div>
  );
}
