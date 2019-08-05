import React, { useContext } from "react";
import { MovieContext } from "../../Context";
import LibraryItem from './LibraryItem'

export default function Library() {
  
  const { movieLibrary } = useContext(MovieContext);

  return movieLibrary.map(movie =>  <LibraryItem key={movie.id} movie={movie}/>)
}
