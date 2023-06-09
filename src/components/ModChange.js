import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ModeContext } from "../contexts/ModeContext";
export default function ModChange() {
  const { language, handleLanguageChange } = useContext(LanguageContext);
  const { darkMode, handleMode } = useContext(ModeContext);

  // const toggleMode = (e) => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  // };
  // useEffect(() => {
  //   const body = document.getElementById("bodyxx");
  //   if (darkMode === "dark") {
  //     body.classList.toggle("dark-mode");
  //   }
  // }, []);
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "dark") {
      document.documentElement.classList.add("dark-mode");
      console.log(localStorage.darkMode);
    } else {
      document.documentElement.classList.remove("dark-mode");
      console.log(localStorage.darkMode);
    }
  }, []);

  useEffect(() => {
    const body = document.getElementById("bodyxx");
    body.classList.toggle("dark-mode");
    const lang = document.querySelector(".modetext");
    lang.classList.toggle("dark-mode");
  }, [darkMode]);
  return (
    <div className="modechange">
      <div className="dark-mode__toggle">
        <div
          onClick={handleMode}
          className={darkMode === "dark" ? "toggle toggled " : "toggle"}
        />
      </div>
      <div className="modetext">
        {language === "eng" && darkMode === "dark" ? "LIGHT MODE" : ""}
        {language === "eng" && darkMode === "light" ? "DARK MODE" : ""}
        {language === "tr" && darkMode === "light" ? "KARANLIK MOD" : ""}
        {language === "tr" && darkMode === "dark" ? "AYDINLIK MOD" : ""}
      </div>
      <div className="modetext">|</div>
      <div className="modetext">
        {language === "eng" ? (
          <span onClick={handleLanguageChange}>TÜRKÇE'YE GEÇ</span>
        ) : (
          <span onClick={handleLanguageChange}>ENGLISH</span>
        )}
      </div>
    </div>
  );
}
