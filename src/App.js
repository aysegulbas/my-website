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

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("languagekey") || "eng"
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("modekey") || "light"
  );
  const handleLanguageChange = () => {
    if (language === "eng") {
      setLanguage("tr");
      localStorage.setItem("languagekey", "tr");
    } else {
      setLanguage("eng");
      localStorage.setItem("languagekey", "eng");
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
        <div className="appcontainer">
          <ModChange />
          <Header />
          <Bio />
          <Skills />
          <Profil />
          <Projects2 />
        </div>
        <Footer />
      </LanguageContext.Provider>
    </ModeContext.Provider>
  );
}

export default App;
