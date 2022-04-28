import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Header = () => {
  const getNumberCart = useSelector((state) => state.numberCart);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header-container">
      <div className="top-box">
        <ul>
          <div className="top-box-left">
            <li className="tel-class">
              (00) 000 111 222&nbsp;
              <i className="fa fa-phone" aria-hidden="true"></i>
            </li>

            <li className="li-left">
              info@somedomain.com&nbsp;
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </li>
          </div>
          <div className="top-box-right">
            <li className="li-left">
              <i className="fa fa-user"></i>&nbsp;{t("header.1")}
            </li>
            <li className="li-left">
              <Link to="/cart" className="cart-icon">
                <i className="fa fa-shopping-cart"></i>&nbsp;{t("header.2")}
                &nbsp;
                {getNumberCart ? getNumberCart : null}
              </Link>
            </li>
          </div>
        </ul>
      </div>

      <div className="row" id="header-logo-bar">
        <div className="logo text-center col-md-6">
          <img
            id="logo"
            src="//cdn.shopify.com/s/files/1/0652/0011/files/logo.png?v=1648443808"
            alt="kids-life"
            style={{ width: "250px" }}
          />
        </div>

        <div className="col-md-3 lang-menu">
          {/* <div className="selected-lang">
            <div className="flag-us-icon">
              <button type="button" onClick={() => changeLanguage("vi")}>
                <span className="fi fi-us fis"></span>&nbsp;&nbsp;English de
              </button>
            </div>
          </div>
          <ul>
            <li>
              <button type="button" onClick={() => changeLanguage("en")}>
                <span className="fi fi-vn fis"></span>&nbsp;&nbsp;Vietnam
              </button>
            </li>
          </ul> */}
          <button type="button" onClick={() => changeLanguage("vi")}>
            <span className="fi fi-vn fis"></span>&nbsp;&nbsp;Vietnam
          </button>
          <button type="button" onClick={() => changeLanguage("en")}>
            <span className="fi fi-us fis"></span>&nbsp;&nbsp;English
          </button>
        </div>

        <div className="col-md-3 search-class">
          <input
            type="search"
            id="SearchInput"
            name="q"
            defaultValue=""
            placeholder="Search"
            className="col-md-3 search-bar__input"
          ></input>

          <i className="fa fa-search" aria-hidden="true" id="search-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
