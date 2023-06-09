import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Link } from "react-scroll";

const Header = ({}) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="headercontainer">
      <div className="circle">A</div>
      <div className="headernav">
        <ul>
          <li>
            {language === "eng" ? (
              <Link to="skillsScroll" smooth={true} duration={700}>
                <span>Skills</span>
              </Link>
            ) : (
              <Link to="skillsScroll" smooth={true} duration={700}>
                {" "}
                <span>Yetenekler</span>
              </Link>
            )}
          </li>
          <li>
            {language === "eng" ? (
              <Link to="projectsScroll" smooth={true} duration={700}>
                <span>Projects</span>
              </Link>
            ) : (
              <Link to="projectsScroll" smooth={true} duration={700}>
                <span>Projeler</span>
              </Link>
            )}
          </li>
          <li>
            {language === "eng" ? (
              <Link to="contactScroll" smooth={true} duration={1000}>
                <span className="headhire">Hire me</span>
              </Link>
            ) : (
              <Link to="contactScroll" smooth={true} duration={1000}>
                <span className="headhire">İletişim</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
