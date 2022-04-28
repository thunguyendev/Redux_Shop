import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="footer-class">
        <div className="row all-items">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 footer-item">
            <p className="footer-title">{t("footer.1")}</p>
            <img
              className="img-fluid"
              src={
                "https://cdn.shopify.com/s/files/1/0652/0011/files/red_sketch_1920X_fc1289fc-2399-48cd-9463-ceffbaaf6622_800x.jpg?v=1648536343"
              }
              alt="logo"
            />
            <div className="footer-content">
              <p>
                Happy Kids Life comes with powerful theme options, which
                empowers you to quickly and easily build incredible store.
              </p>
              <div className="dt-sc-divider">
                <ul>
                  <li>
                    <Link to="/" className="links">
                      English Grammar Class
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/shop" className="links">
                      Music class
                    </Link>
                  </li>
                  <li>
                    <Link to="/collections" className="links">
                      Swimming &amp; Karate
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us" className="links">
                      Lot of HTML Styles
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="links">
                      Unique News Page Design
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 footer-item">
            <p className="footer-title">{t("footer.2")}</p>
            <img
              className="img-fluid"
              src={
                "https://cdn.shopify.com/s/files/1/0652/0011/files/yellow_sketch_800x.png?v=1553596277"
              }
              alt="logo"
            />
            <div className="footer-content">
              <p>
                Roin bibendum nibhsds. Nuncsdsd fermdada msit ametadasd c...
              </p>
              <p>Oct 13 , 2014</p>
              <p>
                Roin bibendum nibhsds. Nuncsdsd fermdada msit ametadasd c...
              </p>
              <p>Sep 22 , 2014</p>
              <p>
                Roin bibendum nibhsds. Nuncsdsd fermdada msit ametadasd c...
              </p>
              <p>Sep 22 , 2014</p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 footer-item">
            <p className="footer-title">{t("footer.3")}</p>
            <img
              className="img-fluid"
              src={
                "https://cdn.shopify.com/s/files/1/0652/0011/files/green_sketch_800x.png?v=1553596269"
              }
              alt="logo"
            />
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 footer-item">
            <p className="footer-title">{t("footer.4")}</p>
            <img
              className="img-fluid"
              src={
                "https://cdn.shopify.com/s/files/1/0652/0011/files/steelblue_sketch_800x.png?v=1553596283"
              }
              alt="logo"
            />
            <div className="footer-content">
              <p>
                <i className="fa fa-home contact-icon" aria-hidden="true"></i>
                &nbsp;&nbsp;No: 58 A, East Madison Street, Baltimore, MD, USA
                4508
              </p>
              <p>
                <i
                  className="fa fa-envelope contact-icon"
                  aria-hidden="true"
                ></i>
                &nbsp;&nbsp;support1@somemail.com
              </p>
              <p>
                <i className="fa fa-phone contact-icon"></i>&nbsp;&nbsp;91
                1234567890
              </p>
              <p>
                <i className="fa fa-fax contact-icon"></i>&nbsp;&nbsp;91
                1234567890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
