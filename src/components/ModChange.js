import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ModeContext } from "../contexts/ModeContext";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
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
  //     body?.classList.toggle("dark-mode");
  //   }
  // }, []);
  useEffect(() => {
    if (localStorage.getItem("modekey") === "dark") {
      document.documentElement.classList.add("dark");
      console.log(localStorage.getItem("modekey"));
    } else {
      document.documentElement?.classList.remove("dark");
      console.log(localStorage.darkMode);
    }
    console.log("calıştı1");
  }, [darkMode]);
  useEffect(() => {
    const body = document.getElementById("bodyxx");
    if (darkMode === "dark") {
      body.classList.add("dark-mode");
      language === "eng"
        ? toast("You are on dark mode")
        : toast("Karanlık moddasınız");
    } else {
      body.classList.remove("dark-mode");
      language === "tr"
        ? toast("Aydınlık moddasınız")
        : toast("You are on light mode");
    }
  }, [darkMode]);

  return (
    <div className="flex justify-end pt-8 tracking-widest ml-4 items-center">
      <div className="dark-mode__toggle dark:bg-[#3A3A3A]">
        <div
          onClick={handleMode}
          className={darkMode === "dark" ? "toggle toggled" : "toggle"}
        />
        <div
          onClick={handleMode}
          className={darkMode === "dark" ? "toggle icon" : "toggle"}
        />
      </div>

      <div className="text-base font-bold tracking-widest text-[#777777] ml-2 dark:text-[#d9d9d9]">
        {language === "eng" && darkMode === "dark" ? "LIGHT MODE" : ""}
        {language === "eng" && darkMode === "light" ? "DARK MODE" : ""}
        {language === "tr" && darkMode === "light" ? "KARANLIK MOD" : ""}
        {language === "tr" && darkMode === "dark" ? "AYDINLIK MOD" : ""}
      </div>
      <div className="text-base font-bold tracking-widest text-[#777777] ml-2 dark:text-[#d9d9d9]">
        |
      </div>
      <div className="text-base font-bold tracking-widest text-[#777777] ml-2 dark:text-[#d9d9d9]">
        {language === "eng" ? (
          <span onClick={handleLanguageChange}>TÜRKÇE'YE GEÇ</span>
        ) : (
          <span onClick={handleLanguageChange}>ENGLISH</span>
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose="3000"
        closeOnClick="true"
        pauseOnHover="true"
        draggable="true"
        theme="light"
      />
    </div>
  );
}
