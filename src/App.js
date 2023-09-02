import LandingPage from "./components/Landing";
import Movies from "./components/Movies";
import Moviespopular from "./components/Movies-popular";
import Navb from "./components/Navb";
import Tvshows from "./components/TvShows";
import TvPopular from "./components/Tvshows-popular";
import TopMovies from "./components/topMovies";
import TvTop from "./components/Tvshows-top";
import MoviesPlaying from "./components/Movies-Playing";
import TvToday from "./components/Tvshows-Today";
import Moviesupcoming from "./components/Movies-upcoming.jsx";
import TvAir from "./components/Tvshows-Air";
import Footerpage from "./components/Footer";
import { Routes , Route } from "react-router";
import MoviesDetails from "./components/movies-Details/Movies-Details";
import TvDetails from "./components/tv-Details/Tv-Details";
import DiscoverMovies from "./components/Discover/Discover-Movies";
import DiscoverTvShows from "./components/Discover/Discover-TvShowes";
import MoviesPage from "./components/Page_Movies";
import TvPage from "./components/Page-Tv";
import SearchPage from "./components/Search";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navb />
              <LandingPage />
              <Movies />
              <Tvshows />
              <TopMovies />
              <Moviespopular />
              <TvPopular />
              <TvTop />
              <MoviesPlaying />
              <TvToday />
              <Moviesupcoming />
              <TvAir />
              <Footerpage />
            </>
          }
        />
        <Route
          path="/movie/:movie_id"
          element={
            <>
              <Navb />
              <MoviesDetails />
            </>
          }
        />
        <Route
          path="/tv/:tv_id"
          element={
            <>
              <Navb />
              <TvDetails />
            </>
          }
        />
        <Route
          path="/discover/movies"
          element={
            <>
              <Navb />
              <DiscoverMovies />
            </>
          }
        />
        <Route
          path="/discover/tv"
          element={
            <>
              <Navb />
              <DiscoverTvShows />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Navb />
              <MoviesPage />
            </>
          }
        />
        <Route
          path="/tvshows"
          element={
            <>
              <Navb />
              <TvPage />
            </>
          }
        />
        <Route
          path="/search/:query"
          element={
            <>
              <Navb />
              <SearchPage />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navb />
              <Register />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navb />
              <Login />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
