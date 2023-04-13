import "./Header.scss";
import appIcon from "../assets/icons/trythis6.png";

import SearchBar from "./SearchBar/SearchBar";

export const Header = () => {
  return (
    <>
      <header className="header">
        <a href="/">
          <p className="header__title-title">Spotlit</p>
        </a>
        <img className="header__logo" src={appIcon} />
        <div className="header__title-container">
          {/* <div className="header__logo-wrapper"> */}

          {/* </div> */}

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
          {/* <SearchBar /> */}
        </div>
      </header>
    </>
  );
};
export default Header;
