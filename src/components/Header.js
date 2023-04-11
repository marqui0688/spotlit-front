import "./Header.scss";

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
          <div>
            <a href="/">
              <p className="navigation__header">My Auditions</p>
            </a>
          </div>
          <div>
            <a href="/calendar">
              <p className="navigation__header">Calendar</p>
            </a>
          </div>
          {/* <div>
            <a>
              <p className="navigation__header">Research</p>
            </a>
          </div> */}
        </nav>
        <SearchBar />
      </header>
    </>
  );
};
export default Header;
