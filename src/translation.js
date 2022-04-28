import React from "react";
import "./../assets/css/change-lang.css";
import { useTranslation } from "react-i18next";

import { LANGUAGES } from "./../system";
import Auth from "../helpers/auth";

const ChangeLanguage = ({ pAbsolute = true }) => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = React.useState(Auth.getLang());

  React.useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang, i18n]);

  const changeLang = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <div className={`change-lang ${pAbsolute ? "p-absolute" : ""} `}>
      <div className="btn-group">
        <button
          className="btn btn-sm dropdown-toggle p-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={`/images/${selectedLang}.png`} alt={selectedLang} />
        </button>
        <ul className="dropdown-menu">
          {LANGUAGES.map((lang, index) => {
            return (
              <li key={index}>
                <span
                  onClick={(e) => changeLang(lang)}
                  className="dropdown-item"
                >
                  <img src={`/images/${lang}.png`} alt={lang} />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChangeLanguage;
