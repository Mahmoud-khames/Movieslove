
import { useEffect, useState } from "react";
import { Link , useNavigate , useLocation} from "react-router-dom";
import "../style/globals.css"; 
import logoPage from '../image/logo-page.png';


function Navb() {

 const [inputValue, setinputValue] = useState("");
    const navigate = useNavigate();
    const Location = useLocation();
console.log(Location);
    function handleSearch(e) {
      let query = e.target.value;

      if (query === "") {
        navigate("/");
      } else {
        navigate(`/search/${query}`);
      }
    }
  useEffect(() => {
    
    window.onscroll = () => {
      const header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 0);
    };
    // toggol
    const navToggle = document.querySelector(".nav-bar");
    const navMain = document.querySelector(".nav-main");
    const navClose = document.querySelector(".nav-close");
    navToggle.addEventListener("click", () => {
      navMain.classList.add("show-menu");
    });
    navClose.addEventListener("click", () => {
      navMain.classList.remove("show-menu");
    });
    // active
    const allItem = document.querySelectorAll(".nav-main .nav-item");
    allItem.forEach((item) => {
      item.addEventListener("click", () => {
        allItem.forEach((item) => {
          item.classList.remove("active");
        });
        item.classList.add("active");
        navMain.classList.remove("show-menu");
      });
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
  }, []);
  return (
    <>
      <div className="header ">
        <div className="main-nav container">
          <div className="nav-logo">
            <Link to={"/"} className="nav-logo-text">
              <img src={logoPage} alt="logo-page.png" />
            </Link>
          </div>
          <div className="nav-main">
            <div className="nav-logo2">
              <Link to={"/"} className="nav-logo-text2">
                <img src={logoPage} alt="logo-page.png" />
              </Link>
            </div>
            <ul className="nav-list">
              <li
                className={`nav-item ${
                  Location.pathname === "movieslove/" ? "active" : ""
                }`}
              >
                <Link to="movieslove/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="dropdown drop">
                <a
                  className="btn nav-link dropdown-toggle active"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Discover
                </a>

                <ul className="dropdown-menu">
                  <li
                    className={`nav-item ${
                      Location.pathname === "/discover/movies" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="nav-link dropdown-item"
                      to={"/discover/movies"}
                    >
                      Movies
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      Location.pathname === "/dicover/tv" ? "active" : ""
                    }`}
                  >
                    <Link
                      className="nav-link dropdown-item"
                      to={"/discover/tv"}
                    >
                      TV Shows
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item ${
                  Location.pathname === "/movies" ? "active" : ""
                }`}
              >
                <Link to={"/movies"} className="nav-link">
                  Movies
                </Link>
              </li>
              <li
                className={`nav-item ${
                  Location.pathname === "/tvshows" ? "active" : ""
                }`}
              >
                <Link to={"/tvshows"} className="nav-link">
                  TV Shows
                </Link>
              </li>
            </ul>
            <div className="nav-close">
              <svg
                width="40"
                height="30"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"
                />
              </svg>
            </div>
            <div className="search">
              <div className="InputContainer">
                <input
                  placeholder="Search.."
                  id="input"
                  className="input"
                  name="text"
                  type="search"
                  value={inputValue}
                  onInput={(e) => setinputValue(e.target.value)}
                  onChange={handleSearch}
                />
              </div>
              <ul className="search-list">
                <li
                  className={`nav-item ${
                    Location.pathname === "/login" ? "active" : ""
                  }`}
                >
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    Location.pathname === "/register" ? "active" : ""
                  }`}
                >
                  <Link to={"/register"} className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav-Button">
            <div className="nav-toggle">
              <svg
                className="nav-bar"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M16 18v2H5v-2h11Zm5-7v2H3v-2h18Zm-2-7v2H8V4h11Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navb;
