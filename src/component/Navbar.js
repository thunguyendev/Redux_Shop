import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { t, i18n } = useTranslation();

  return (
    <>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            {t("menu.part1")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-links" onClick={closeMobileMenu}>
            {t("menu.part2")}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/collections"
              className="nav-links"
              onClick={closeMobileMenu}
            >
               {t("menu.part3")}
            </Link>
            {<Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
                {t("menu.part4")}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
            {t("menu.part5")}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
