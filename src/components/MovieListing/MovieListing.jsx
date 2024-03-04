import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useSelector } from "react-redux";

//
import "./MovieListing.scss";

//
import Slider from "react-slick";
import { Settings } from "../../common/settings";

function MovieListing() {
  // slider

  const movies = useSelector((state) => state.movies.movies);
  const series = useSelector((state) => state.series.series);
  console.log(movies);
  console.log(series);

  let renderMovies,
    renderSeries = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((m, index) => <MovieCard key={index} data={m} />)
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderSeries =
    series.Response === "True" ? (
      series.Search.map((m, index) => <MovieCard key={index} data={m} />)
    ) : (
      <div className="series-error">
        <h3>{series.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="series-list">
        <h2>Series</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderSeries}</Slider>
        </div>
      </div>
    </div>
  );
}

export default MovieListing;
