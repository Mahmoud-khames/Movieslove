import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../style/globals.css";
import { Helmet } from "react-helmet";
// import MyLoader from "../MyLoading";
export default function DiscoverMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [genre, setGenre] = useState([]);
  const [genreid, setGenreid] = useState("");
  const [releaseYear, setreleaseYear] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDc5OWVhNDRlYTg0ODBjNGJiODA5MjBjNmJkYThjYiIsInN1YiI6IjY0ZTJhNGNhOGMwYTQ4MDBlMzkxZTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHeXSXgVuzJPMxipnx2V4NnH-nPp95yaOiv2sXaK_J8",
      },
    };
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=c04c56b8aeb3dce3acdfd16eb3ca314b&language=en-US&${sortBy}&include_adult=false&include_video=false&page=${page}&${releaseYear}${genreid}&with_watch_monetization_types=flatrate`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
    setLoading(false);
  }, [page, sortBy, releaseYear, genreid]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDc5OWVhNDRlYTg0ODBjNGJiODA5MjBjNmJkYThjYiIsInN1YiI6IjY0ZTJhNGNhOGMwYTQ4MDBlMzkxZTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHeXSXgVuzJPMxipnx2V4NnH-nPp95yaOiv2sXaK_J8",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => setGenre(response.genres))
      .catch((err) => console.error(err));
  }, []);

  function handleSortBy(sortBy) {
    setSortBy(sortBy);
    setPage(1);
  }

  function handleGenre(genr) {
     setGenreid(genr);
    setPage(1);
 }
  function handleReleaseYear(releaseYear) {
    setreleaseYear(releaseYear);
    setPage(1);
  }
  function handleReset() {
    setPage(1);
    setGenreid("");
    setSortBy("");
    setreleaseYear("");
  }

  const sideBarDiscover = window.document.querySelector(".sideBarDiscover");

  function handleBarResponsive() {
    if (sideBarDiscover.style.left === "-82%") {
      sideBarDiscover.style.left = "0%";
    } else {
      sideBarDiscover.style.left = "-82%";
    }
  }

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
        <link
          rel="shortcut icon"
          href="../../img/logo.png"
          type="image/x-icon"
        />
        <title>Discover Movies</title>
      </Helmet>
      <div className="discover_movies">
        <div className="container-fluid">
          <div className="row ms-5 me-5">
            <div
              className="sideBarDiscover col-md-2 col-10 bg-dark pt-5 pb-5 ps-4 pe-4 shadow rounded-3"
              style={{ left: "2.5%" }}
            >
              <div
                className="accordion mb-3"
                id="accordionPanelsStayOpenExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Sort by
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body d-flex flex-column">
                      <Link
                        className="bg-light text-dark text-decoration-none rounded-2 p-2 pt-1 pb-1 text-dark mb-1"
                        onClick={() => handleSortBy("sort_by=popularity.desc")}
                      >
                        Popularity
                      </Link>
                      <Link
                        className="bg-light text-dark text-decoration-none rounded-2 p-2 pt-1 pb-1 text-dark mb-1"
                        onClick={() =>
                          handleSortBy("sort_by=release_date.desc")
                        }
                      >
                        Release Date
                      </Link>
                      <Link
                        className="bg-light text-dark text-decoration-none rounded-2 p-2 pt-1 pb-1 text-dark mb-1"
                        onClick={() => handleSortBy("sort_by=revenue.desc")}
                      >
                        Revenue
                      </Link>
                      <Link
                        className="bg-light text-dark text-decoration-none rounded-2 p-2 pt-1 pb-1 text-dark mb-1"
                        onClick={() =>
                          handleSortBy("sort_by=primary_release_date.desc")
                        }
                      >
                        Primary Release Date
                      </Link>
                      <Link
                        className="bg-light text-dark text-decoration-none rounded-2 p-2 pt-1 pb-1 text-dark mb-1"
                        onClick={() =>
                          handleSortBy("sort_by=vote_average.desc")
                        }
                      >
                        Vote Average
                      </Link>
                      <Link
                        className="bg-light text-dark text-decoration-none rounded-2 p-2 pt-1 pb-1 text-dark mb-1"
                        onClick={() => handleSortBy("sort_by=vote_count.desc")}
                      >
                        Vote Count
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion mb-3"
                id="accordionPanelsStayOpenExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Genres
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <div className="d-flex flex-wrap">
                        {genre.map((genr) => (
                          <Link
                            className="h6 m-0 bg-light text-dark text-decoration-none rounded-2 p-2 pt-1 pb-1 m-1"
                            onClick={() =>
                              handleGenre(`with_genres=${genr.id}`)
                            }
                            key={genr.id}
                          >
                            {genr.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <select
                className="form-select bg-light mb-5 text-dark p-2 ps-3"
                onChange={(event) =>
                  handleReleaseYear(`year=${event.target.value}`)
                }
              >
                <option>Release Dates</option>
                {Array.from({ length: 140 }, (_, i) => 1887 + i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <button
                onClick={handleReset}
                className="btn btn-outline-light w-100 mt-3"
              >
                Reset
              </button>
              <div
                onClick={handleBarResponsive}
                className="barToggle text-light pointer p-2 position-absolute translate-middle-y"
              >
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="feAppMenu0"
                    fill="none"
                    fill-rule="evenodd"
                    stroke="none"
                    stroke-width="1"
                  >
                    <g id="feAppMenu1" fill="#ffffff">
                      <path
                        id="feAppMenu2"
                        d="M16 16h4v4h-4v-4Zm-6 0h4v4h-4v-4Zm-6 0h4v4H4v-4Zm12-6h4v4h-4v-4Zm-6 0h4v4h-4v-4Zm-6 0h4v4H4v-4Zm12-6h4v4h-4V4Zm-6 0h4v4h-4V4ZM4 4h4v4H4V4Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="col-md-10 ms-auto mt-5 pt-5 me-0 row gy-4 justify-content-center">
              <div class="col-12 d-flex flex-column align-items-center">
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

              {movies &&
                movies.map((item, i) => {
                  const imageUrl = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
                  return (
                    <div class="col-xl-2 col-md-3 col-sm-6 col-6 p-1  pointer position-relative">
                      <Link
                        to={`#/movie/${item.id}`}
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
