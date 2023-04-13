import "./SearchBar.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dummyThumb from "../../assets/icons/galaxy.jpg";

const API_URI = process.env.REACT_APP_API_URI;
function SearchBar() {
  const { data, setData } = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const query = e.target.searchbar.value.trim().replace(" ", "+");
    // const data = res.json();
    // window.open(`https://www.themoviedb.org/search?query=${query}`);
    // navigate(`https://www.themoviedb.org/search?query=${query}`);

    // async function loadMovies(query) {
    //   // const URL = `https://omdbapi.com/?s=${query}&page=1&apikey=b2aa9a08`;
    //   const res = await fetch(`${URL}`);

    //   // console.log(data.Search);
    //   if (data.Response == "True") displayMovieList(data.Search);
    // }

    axios
      .get(
        // `https://api.themoviedb.org/3/search/multi?api_key=201881c87db23748a32eed8954d51824&query=${query}`
        `https://www.omdbapi.com/?s=${query}&page=1&apikey=b2aa9a08`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {/* Search bar  */}
      <div className="search__wrapper">
        <form className="search__input" onSubmit={handleSubmit}>
          <input
            className="search__field"
            placeholder="Search"
            name="searchbar"
          />
          <button classname="search__button"></button>
        </form>
      </div>
      {/* Search list */}
      <div className="search__list" id="search-list">
        <div className="search__list-item" id="search-item">
          <div className="search__list-thumbnail" id="search-thumbnail">
            <img src={dummyThumb} />
          </div>
          <div className="search__list-item-info">
            <h3>Guardians of the Galaxy</h3>
            <p>2017</p>
          </div>
        </div>
        {/* Result container */}
        <div className="result__wrapper">
          <div className="result__container">
            <div className="result__grid" id="result-grid">
              {/* Movie info  */}
              <div className="result__movie-poster">
                <img src={dummyThumb} />
              </div>
              <div className="result__movie-info">
                <h3 className="result__movie-title">Guardians of the Galaxy</h3>
                <ul className="result__movie-misc-info">
                  <li className="result__movie-year">2017</li>
                  <li className="result__movie-rating">Rating: PG-13</li>
                  <li className="result__movie-release">Released 05 May</li>
                </ul>
                <p className="result__genre">
                  <span style={{ fontWeight: "bold" }}>Genre:</span> Action,
                  Comedy, Drama
                </p>
                <p className="result__writer">
                  <span style={{ fontWeight: "bold" }}>Writer:</span> Test
                </p>
                <p className="result__actor">
                  <span style={{ fontWeight: "bold" }}>Actor:</span> Marcus
                  Anderson Jr
                </p>
                <p className="result__plot">
                  <span style={{ fontWeight: "bold" }}>Plot:</span> Marcus
                  Anderson Jr will book big this year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
