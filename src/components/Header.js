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

          <div className="zoom">
            <a href="/">
              <p className="navigation__header">Auditions</p>
            </a>
          </div>
          <div className="zoom">
            <a href="/find">
              <p className="navigation__header">Find</p>
            </a>
          </div>
          <SearchBar />
        </div>
      </header>
    </>
  );
};
export default Header;
