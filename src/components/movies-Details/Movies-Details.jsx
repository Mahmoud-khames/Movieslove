import { useParams } from 'react-router';
import '../../style/globals.css';
import { useEffect, useState, useReducer } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css";
import Recommendations from './Recommendations';
import TopMovies from '../topMovies';
SwiperCore.use(Autoplay);
export default function MoviesDetails() {
    const [data, setData] = useState();
  const [video, setvideo] = useState();
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
    let prams = useParams();

    useEffect(() => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDc5OWVhNDRlYTg0ODBjNGJiODA5MjBjNmJkYThjYiIsInN1YiI6IjY0ZTJhNGNhOGMwYTQ4MDBlMzkxZTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHeXSXgVuzJPMxipnx2V4NnH-nPp95yaOiv2sXaK_J8",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/movie/${prams.movie_id}?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.error(err));
      forceUpdate();
    }, [ignored]);
  
    useEffect(() => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDc5OWVhNDRlYTg0ODBjNGJiODA5MjBjNmJkYThjYiIsInN1YiI6IjY0ZTJhNGNhOGMwYTQ4MDBlMzkxZTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHeXSXgVuzJPMxipnx2V4NnH-nPp95yaOiv2sXaK_J8",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/movie/${prams.movie_id}/videos?language=en-US`,
        options
      )
        .then((response) => response.json())
        .then((response) => setvideo(response.results))
        .catch((err) => console.error(err));
    }, []);
  /*{``} */
    return (
      <>
        <div className="movie-deatails" id='movie-deatails'>
          <Swiper
            modules={Autoplay}
            grabCursor={true}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 8000 }}
          >
            {data && (
              <SwiperSlide>
                {({ isActive }) => (
                  <img
                    className="img"
                    src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                    alt="backdrop_path"
                  />
                )}
              </SwiperSlide>
            )}
          </Swiper>
          {data && (
            <div className="container ">
              <div className="row_container row">
                <div className="col-12 col-md-3 col-lg-3 z-3">
                  <div className="details-imges">
                    <img
                      className="img-details img-fluid"
                      src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12 col-md-9 col-lg-9 z-3">
                  <div className="details-text">
                    <h2 className="title">
                      {data.title}
                      <span className="release_date">
                        ({data.release_date.slice(0, 4)})
                      </span>
                    </h2>
                    <p className="genres">
                      <span>
                        {data.genres.map((item) => item.name + "    ")}
                      </span>
                    </p>
                    <p className="overview">{data.overview}</p>
                  </div>
                  <div className="col-12 col-md-9 col-lg-9 z-3">
                    <div className="details_vote">
                      <span className="span">
                        <p className="span-text">vote_average</p>
                        <span className="vote_average">
                          {data.vote_average}
                        </span>
                      </span>
                      <span className="span">
                        <p className="span-text">vote_count</p>
                        {data.vote_count}
                      </span>
                      <span className="span">
                        <p className="span-text">popularity</p>
                        {data.popularity}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 z-3">
                  <p className="viedos">Viedos</p>
                  <div className="details-viedos">
                    {video &&
                      video.slice(0, 4).map((item) => (
                        <div className="drobdown">
                          <button
                            className="dropi btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {item.name.slice(0, 30)}...
                          </button>
                          <div className="dropdown-menu">
                            <iframe
                              className="iframe"
                              src={`https://www.youtube.com/embed/${item.key}`}
                              title="YouTube video player"
                              frameborder="4"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Recommendations />;
        <TopMovies />
      </>
    );
}




