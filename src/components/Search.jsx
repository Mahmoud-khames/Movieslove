import { useEffect, useState } from "react";
import { Link ,useParams } from "react-router-dom";
import "../style/globals.css";
import { Helmet } from "react-helmet";
export default function SearchPage() {
  const [search, setSearch] = useState([]);
    const [page, setPage] = useState(1);
    const params = useParams();
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
      `https://api.themoviedb.org/3/search/multi?api_key=c04c56b8aeb3dce3acdfd16eb3ca314b&language=en-US&query=${params.query}&page=${page}&include_adult=false`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSearch(response.results))
      .catch((err) => console.error(err));
  }, [page, params.query]);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Our website is a one-stop-shop for everything related to movies, TV shows, and actors. We have a vast collection of content, ranging from the latest blockbusters to classic movies and TV shows."
        />
        
        <title>Search</title>
      </Helmet>
      <div className="discover_movies">
        <div className="container-fluid">
          <div className="row ms-5 me-5">
            <div className="col-md-12 ms-auto mt-5 pt-5 me-0 row gy-4 justify-content-center">
              <div className="col-12 d-flex flex-column align-items-center">
                <div>
                  <button
                    className="btn bg-light ps-4 pe-4 m-2"
                    onClick={(event) => {
                      if (page === 1) {
                        event.preventDefault();
                        return;
                      }
                      setPage(page - 1);

                      console.log(page);
                    }}
                  >
                    <svg
                      width="30"
                      height="20"
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000000"
                        d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z"
                      />
                      <path
                        fill="#000000"
                        d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
                      />
                    </svg>
                  </button>
                  <button
                    className="btn bg-light ps-4 pe-4 m-2"
                    onClick={() => {
                      setPage(page + 1);
                      console.log(page);
                    }}
                  >
                    <svg
                      width="30"
                      height="20"
                      viewBox="0 0 16 9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000000"
                        d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z"
                      />
                      <path
                        fill="#000000"
                        d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {search &&
                search.map((item, i) => {
                  const imageUrl = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
                  return (
                    <div class="col-xl-2 col-md-3 col-sm-6 col-6 p-1  pointer position-relative">
                      <Link
                        to={`movieslove/movie/${item.id}`}
                        onClick={handleLinkClick}
                        className="item text-decoration-none p-0 me-2 pt-1"
                      >
                        <div className="discover_movies-slide">
                          <div className="discover_movies-slide-img">
                            <img
                              className="discover_movies-img img-fluid "
                              src={imageUrl}
                              alt="backdrop_path"
                            />
                            <span className="discover_movies-average ">
                              {item.vote_average}
                            </span>
                          </div>
                          <div className="discover_movies-slide-text text-center mt-2 p-1">
                            <h2 className="discover_movies-title h6">
                              {item.title}
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              <div className="col-12 d-flex flex-column align-items-center text-white fw-bold mt--1">
                Page: ({page})
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
