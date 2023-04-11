import "./Header.scss";
import auditionsIcon from "../assets/icons/auditions.png";
import calendarIcon from "../assets/icons/calendar.png";
import researchIcon from "../assets/icons/research.png";
import SearchBar from "./SearchBar/SearchBar";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__title-container">
          <a href="/">
            <p className="header__title-title">Spotlit</p>
          </a>
        </div>

        {/* Navigation*/}

        <nav className="navigation">
          <div className="zoom">
            <a href="/">
              <p className="navigation__header">My Auditions</p>
            </a>
          </div>
          <div className="zoom">
            <a>
              <p className="navigation__header">Calendar</p>
            </a>
          </div>
          <div className="zoom">
            <a>
              <p className="navigation__header">Research</p>
            </a>
          </div>
        </nav>
        <SearchBar />
      </header>
    </>
  );
};
export default Header;
