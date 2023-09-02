import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

export default function Recommendations() {
    const [data, setData] = useState();
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
        `https://api.themoviedb.org/3/movie/${prams.movie_id}/recommendations?language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response.results))
        .catch((err) => console.error(err));
    }, [prams.movie_id]);
  const handleLinkClick = () => {
    window.scrollTo(0,0);
  };
  return (
    <>
      <div className="topmovies">
        <div className="row">
          <div className="col-md-12">
            <a href="/#" className="text-decoration-none ms-2">
              <h2>
                Recommendations
                <span className="span">
                  Explore All <i className="fa-solid fa-angles-right"></i>
                </span>
              </h2>
            </a>
          </div>
          {data && (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              grabCursor={true}
              slidesPerView={1}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                },
                490: {
                  slidesPerView: 3,
                },
                720: {
                  slidesPerView: 4,
                },
                960: {
                  slidesPerView: 5,
                },
                1140: {
                  slidesPerView: 7,
                },
              }}
              navigation={true}
              autoplay={{ delay: 10000 }}
            >
                {data.map((item ,i) => {
                 const imageUrl = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
                  return (
                    <SwiperSlide key={i}>
                      {({ isActive }) => (
                        <Link
                          to={`/movie/${item.id}`}
                          onClick={handleLinkClick}
                          className="item text-decoration-none p-0 me-2 pt-1"
                        >
                          <div className="custom-slide">
                            <div className="custom-slide-img">
                              <img
                                className="custom-img "
                                src={imageUrl}
                                alt="backdrop_path"
                              />
                              <span className="custom-average">
                                {item.vote_average}
                              </span>
                            </div>
                            <div className="custom-slide-text text-center mt-2 p-1">
                              <h2 className="custom-title h6">{item.title}</h2>
                            </div>
                          </div>
                        </Link>
                      )}
                    </SwiperSlide>
                  );
                  
                  
                 
                
              })}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
}
