import { useEffect } from "react"
import { useSelector , useDispatch } from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { fetchTvon_the_air } from "../Redux/tv-slice-airing";
import { Link } from 'react-router-dom';

export default function TvAir() {
  
  let tvon_the_air = useSelector((state) => state.tvon_the_air);
const dispatch = useDispatch();

      useEffect(() => {
        dispatch(fetchTvon_the_air())
      }, [])
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
    return (
 <>
    <div className="topmovies top">
        <div className="row">
            <div className="col-md-12">
            <a href="/#" className="text-decoration-none ms-2">
                <h2>On The Air TV Shows <span className="span">Explore All <i className="fa-solid fa-angles-right"></i></span></h2>
            </a>
            </div>
          {Array.isArray(tvon_the_air)&& (
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
              {
              tvon_the_air.map((item) => {
                  return (
                    item.map((item, i) => {
                        
                      const imageUrl = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
                      return (
                        <SwiperSlide key={item.id}>
                          {({ isActive }) => (
                            <Link
                              to={`/tv/${item.id}`}
                              onClick={handleLinkClick}
                              className="item text-decoration-none p-0 me-2 pt-1"
                            >
                              <div className="custom-slide">
                                <div className="custom-slide-img">
                                  <img
                                    className="custom-img "
                                    src={imageUrl}
                                    alt=""
                                  />
                                  <span className="custom-average">
                                    {item.vote_average}
                                  </span>
                                </div>
                                <div className="custom-slide-text text-center mt-2 p-1">
                                  <h2 className="custom-title h6">
                                    {item.name}
                                  </h2>
                                </div>
                              </div>
                            </Link>
                          )}
                        </SwiperSlide>
                      );
                  })
                  )
              })
                }
              
              </Swiper>
              
          )}
        </div>
    </div>
  </>
    )
}