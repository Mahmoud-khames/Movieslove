import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import "../style/globals.css";
import logoPage from "../image/logo-page.png";
import SwiperCore from "swiper/core";
import 'swiper/css';
SwiperCore.use(Autoplay);
export default function LandingPage() {
  const [data, setData] = useState([]);

    useEffect(() => {
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDc5OWVhNDRlYTg0ODBjNGJiODA5MjBjNmJkYThjYiIsInN1YiI6IjY0ZTJhNGNhOGMwYTQ4MDBlMzkxZTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHeXSXgVuzJPMxipnx2V4NnH-nPp95yaOiv2sXaK_J8'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => setData(response.results))
  .catch(err => console.error(err));
    }, []);

  return (
    <>
      <div className="landing">
        <Swiper
          
          modules={Autoplay}
          grabCursor={true}
      spaceBetween={0}
          slidesPerView={1}
          autoplay={{delay: 8000}}
        >
          {
            
            data.map((item, i) => {
              const imageUrl = `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;
              return (
                <SwiperSlide key={i}>
                  {({ isActive }) => (
                    <img className="swiper" src={imageUrl} alt="backdrop_path" />
                  )}
                </SwiperSlide>
              );
            })
          }
    </Swiper>
        <div className="row">
          <div className="landing-text col-12 container-fluid">
            <h1 className="landing-content bold900 ms-5 mb-3 d-flex align-items-end flex-wrap">
              Welcome <span class="ms-3"> To </span>
              <div
                className=" d-flex justify-content-end screenflix"
                
              >
                <img
                  src={logoPage}
                  className="img-landing d-inline"
                  alt="Title"
                />
              </div>
            </h1>
            <h2 className="content h4 ms-5 ps-0 text-white-50">
              Millions of movies, TV shows and people to discover. Explore now.
            </h2>
          </div>
          
        </div>
      </div>
    </>
  );
};


 // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const landing = document.querySelector(".landing");
  //     if (landing && data.length > 0) {
  //       const randomNumber = Math.floor(Math.random() * data.length);
  //       const imageUrl = `https://image.tmdb.org/t/p/w500/${data[randomNumber].poster_path}`;
  //       landing.style.backgroundImage = `url(${imageUrl})`;
  //     }
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [data]);