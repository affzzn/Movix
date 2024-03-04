import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";

//
import "./MovieListing.scss";

function MovieListing() {
  const movies = useSelector((state) => state.movies.movies);
  console.log(movies);

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((m, index) => <MovieCard key={index} data={m} />)
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
}

export default MovieListing;
