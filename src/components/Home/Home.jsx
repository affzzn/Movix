import React from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/Api/MovieApi";
import { APIKey } from "../../common/Api/MovieApiKey";
import { useEffect } from "react";

//
import { useDispatch } from "react-redux";
import { addMovie, cleanMovie } from "../../store/slices/movieSlice";
import { addSeries, cleanSeries } from "../../store/slices/seriesSlice";

function Home() {
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

    return () => {
      dispatch(cleanMovie());
    };
  }, []);

  const seriesText = "Fast";

  useEffect(() => {
    const fetchSeries = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${seriesText}&type=series`
      ).catch((error) => console.log(error));
      console.log(response);
      dispatch(addSeries(response.data));
    };

    fetchSeries();

    return () => {
      dispatch(cleanSeries());
    };
  }, []);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
}

export default Home;
