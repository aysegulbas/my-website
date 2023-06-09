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
    if (localStorage.getItem("modekey") === "dark") {
      document.documentElement.classList.add("dark-mode");
      console.log(localStorage.getItem("modekey"));
    } else {
      document.documentElement.classList.remove("dark-mode");
      console.log(localStorage.darkMode);
    }
    console.log("calıştı1");
  }, []);

  useEffect(() => {
    const body = document.getElementById("bodyxx");
    const lang = document.querySelectorAll(".modetext");
    const biohead = document.querySelector(".bioheading");
    const cizgi = document.querySelector(".name-line");
    const myname = document.querySelector(".name");
    const myinfo = document.querySelector(".bioinfo");
    const mycircle = document.querySelector(".circle");
    const myhire = document.querySelector(".hirebutton");
    const mygithub = document.querySelector(".githubbutton");
    const mylinked = document.querySelector(".linkedinbutton");
    const myskills = document.querySelectorAll(".heading-list");
    const myskill = document.querySelectorAll(".skill-list h3");
    const myskillp = document.querySelectorAll(".skill-list p");
    const myprofilhead = document.querySelector(".profileheading");
    const myprofilheadsub = document.querySelectorAll(".profilsubhead");
    const myleftlabel = document.querySelector(".leftlabel");
    const myleftdes = document.querySelector(".leftdes");
    const myabout = document.querySelector(".profileright");
    const mylink = document.querySelectorAll(".projectlink a");
    const myfoot = document.querySelector(".footercontainer");
    const myfoothead = document.querySelector(".foothead");
    const mymail = document.querySelector(".mail");
    const mypersonal = document.querySelector(".personalFooter");

    if (darkMode === "dark") {
      body.classList.add("dark-mode");
      lang.forEach((el) => {
        el.classList.add("dark-mode");
      });
      biohead.classList.add("dark-mode");
      cizgi.classList.add("dark-mode");
      myname.classList.add("dark-mode");
      myinfo.classList.add("dark-mode");
      mycircle.classList.add("dark-mode");
      myhire.classList.add("dark-mode");
      mygithub.classList.add("dark-mode");
      mylinked.classList.add("dark-mode");
      mymail.classList.add("dark-mode");
      mypersonal.classList.add("dark-mode");
      myskills.forEach((el) => {
        el.classList.add("dark-mode");
      });
      myskill.forEach((el) => {
        el.classList.add("dark-mode");
      });
      myskillp.forEach((el) => {
        el.classList.add("dark-mode");
      });
      myprofilhead.classList.add("dark-mode");
      myprofilheadsub.forEach((el) => {
        el.classList.add("dark-mode");
      });
      myleftlabel.classList.add("dark-mode");
      myleftdes.classList.add("dark-mode");
      myabout.classList.add("dark-mode");
      mylink.forEach((el) => {
        el.classList.add("dark-mode");
      });
      myfoot.classList.add("dark-mode");
      myfoothead.classList.add("dark-mode");
    } else {
      mymail.classList.remove("dark-mode");
      myfoot.classList.remove("dark-mode");
      myfoothead.classList.remove("dark-mode");
      body.classList.remove("dark-mode");
      lang.forEach((el) => {
        el.classList.remove("dark-mode");
      });
      biohead.classList.remove("dark-mode");
      cizgi.classList.remove("dark-mode");
      myname.classList.remove("dark-mode");
      myinfo.classList.remove("dark-mode");
      mycircle.classList.remove("dark-mode");
      myhire.classList.remove("dark-mode");
      mygithub.classList.remove("dark-mode");
      mylinked.classList.remove("dark-mode");
      body.classList.remove("dark-mode");
      myskills.forEach((el) => {
        el.classList.remove("dark-mode");
      });
      myskill.forEach((el) => {
        el.classList.remove("dark-mode");
      });
      myskillp.forEach((el) => {
        el.classList.remove("dark-mode");
      });
      myprofilhead.classList.remove("dark-mode");
      myprofilheadsub.forEach((el) => {
        el.classList.remove("dark-mode");
      });
      myleftlabel.classList.remove("dark-mode");
      myleftdes.classList.remove("dark-mode");
      myabout.classList.remove("dark-mode");
      mylink.forEach((el) => {
        el.classList.remove("dark-mode");
      });
      mypersonal.classList.remove("dark-mode");
    }
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
