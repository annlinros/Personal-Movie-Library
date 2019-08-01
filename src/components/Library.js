import React from "react";

export default function Library({movieItem}) {
  const { poster,year, title, imdbRating, plot } = movieItem;
  return (
    <div className="movie-item-container" style={{ color: "black" }}>
      <div className="image-container">
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${poster})` }}
        />
      </div>
      <div className="movie-info">
          <h1>Title :{title}</h1>
          <small>Year: {year}</small>
          <h4>Rating: {imdbRating} / 10</h4>
          <p>{plot}</p>
      </div>
    </div>
  );
}
