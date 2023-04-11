import "./SearchBar.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URI = process.env.REACT_APP_API_URI;
function SearchBar() {
  const { data, setData } = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.searchbar.value.trim().replace(" ", "+");
    console.log(query);
    window.open("https://www.google.com");
    // window.open(`https://www.themoviedb.org/search?query=${query}`);
    // navigate(`https://www.themoviedb.org/search?query=${query}`);
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/search/multi?api_key=201881c87db23748a32eed8954d51824&query=${query}`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => console.log(error));
  };
  return (
    <div className="search">
      <form className="search__input" onSubmit={handleSubmit}>
        <input
          className="search__field"
          placeholder="Search"
          name="searchbar"
        />
        <button>Research</button>
      </form>
    </div>
  );
}

export default SearchBar;
