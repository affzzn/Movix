import React from "react";
import "./MovieDetail.scss";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { APIKey } from "../../common/Api/MovieApiKey";
import MovieApi from "../../common/Api/MovieApi";
import { addDetail, cleanDetail } from "../../store/slices/detailSlice";

function MovieDetail() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detail.detail);
  console.log(data);

  const { imdbID } = useParams();

  useEffect(() => {
    const fetchDetail = async (id) => {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&i=${id}&Plot=full`
      ).catch((error) => console.log(error));
      console.log(response);
      dispatch(addDetail(response.data));
    };
    fetchDetail(imdbID);

    return () => {
      dispatch(cleanDetail());
    };
  }, [imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-start"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                IMDB Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calender"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Actors</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genre</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
