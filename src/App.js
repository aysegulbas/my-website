import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ModChange from "./components/ModChange";
import Skills from "./components/Skills";
import Bio from "./components/Bio";
import Projects2 from "./components/Projects2";
import Profil from "./components/Profil";
import Footer from "./components/Footer";
import { ModeContext } from "./contexts/ModeContext";
import { LanguageContext } from "./contexts/LanguageContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    language === "eng" ? toast("welcome") : toast("hoşgeldiniz");
  }, []);
  const [language, setLanguage] = useState(
    localStorage.getItem("languagekey") || "eng"
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("modekey") || "light"
  );
  const handleLanguageChange = () => {
    if (language === "eng") {
      if (window.confirm("Dili Türkçe olarak değiştirmek istiyor musunuz?")){
      setLanguage("tr");
      localStorage.setItem("languagekey", "tr")};
    } else {
      setLanguage("eng");
      if (window.confirm("Do you want to change language to English?")){
      localStorage.setItem("languagekey", "eng")};
    }
  };
  const handleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      localStorage.setItem("modekey", "dark");
    } else {
      setDarkMode("light");
      localStorage.setItem("modekey", "light");
    }
  };
  return (
    <ModeContext.Provider value={{ darkMode, handleMode }}>
      <LanguageContext.Provider value={{ language, handleLanguageChange }}>
        <div className={darkMode}>
          <div className="flex flex-col container m-auto font-inter bg-[#f5f5f5] no-underline dark:bg-[#252128]">
            <ModChange />
            <Header />
            <Bio />
            <Skills />
            <Profil />
            <Projects2 />
          </div>
          <Footer />
        </div>
        <ToastContainer
          position="top-left"
          autoClose="3000"
          closeOnClick="true"
          pauseOnHover="true"
          draggable="true"
          theme="light"
        />
      </LanguageContext.Provider>
    </ModeContext.Provider>
  );
}

export default App;
