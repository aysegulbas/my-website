import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = ({}) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="footercontainer">
      <div className="footerabove"></div>
      <div className="footerheading">
        {language === "eng" ? (
          <h2 className="foothead">
            {" "}
            Let’s work together on <br /> your next product.
          </h2>
        ) : (
          <h2 className="foothead" t>
            Haydi sonraki ürününüz için
            <br /> birlikte çalışalım.
          </h2>
        )}
      </div>
      <div className="footerbelow">
        <a href="mailto:aysgl_nese@hotmail.com" className="mail">
          👉aysgl_nese@hotmail.com
        </a>

        <div className="footerlink">
          <div>
            {language === "eng" ? (
              <div className="personalFooter">Personal Blog</div>
            ) : (
              <div className="personalFooter">Kişisel Blog</div>
            )}
          </div>
          <a href="https://github.com/aysegulbas/" className="githubFooter">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/ay%C5%9Feg%C3%BCl-ba%C5%9F-1007b065"
            className="linkedinFooter"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
