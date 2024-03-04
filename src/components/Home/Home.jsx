import React from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/Api/MovieApi";
import { APIKey } from "../../common/Api/MovieApiKey";
import { useEffect } from "react";

//
import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "../../store/movies/movieSlice";

function Home() {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const movieText = "Mission";

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
      ).catch((error) => console.log(error));
      console.log(response);
      dispatch(addMovie(response.data));
    };

    fetchMovies();
  }, []);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
}

export default Home;
