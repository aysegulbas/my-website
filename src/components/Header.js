import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Header = ({}) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="headercontainer">
      <div className="circle">A</div>
      <div className="headernav">
        <ul>
          <li>
            {language === "eng" ? <span>Skills</span> : <span>Yetenekler</span>}
          </li>
          <li>
            {language === "eng" ? <span>Projects</span> : <span>Projeler</span>}
          </li>
          <li>
            {language === "eng" ? (
              <span className="headhire">Hire me</span>
            ) : (
              <span className="headhire">İletişim</span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
