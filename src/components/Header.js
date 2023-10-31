import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { Link } from "react-scroll";

const Header = ({}) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="text-[#7B61FF] text-2xl leading-8 font-semibold rounded-full bg-[#EEEBFF] w-16 h-16 text-center rotate-45 flex justify-center items-center dark:bg-[#4731D3] dark:text-[#8F88FF]">
        <span>A</span>
      </div>
      <div className="flex font-medium text-lg text-[#6b7280] gap-5 ">
        <ul className="flex list-none gap-16 ">
          <li>
            {language === "eng" ? (
              <Link to="skillsScroll" smooth={true} duration={700}>
                <span className="cursor-pointer">Skills</span>
              </Link>
            ) : (
              <Link to="skillsScroll" smooth={true} duration={700}>
                {" "}
                <span className="cursor-pointer">Yetenekler</span>
              </Link>
            )}
          </li>
          <li>
            {language === "eng" ? (
              <Link to="projectsScroll" smooth={true} duration={700}>
                <span className="cursor-pointer">Projects</span>
              </Link>
            ) : (
              <Link to="projectsScroll" smooth={true} duration={700}>
                <span className="cursor-pointer">Projeler</span>
              </Link>
            )}
          </li>
          <li>
            {language === "eng" ? (
              <Link to="contactScroll" smooth={true} duration={1000}>
                <span className="border border-solid border-[#3730a3] bg-[#ffffff] rounded-md cursor-pointer font-medium text-lg text-[#3730a3] py-3 px-8 no-underline">
                  Hire me
                </span>
              </Link>
            ) : (
              <Link to="contactScroll" smooth={true} duration={1000}>
                <span className="border border-solid border-[#3730a3] bg-[#ffffff] rounded-md cursor-pointer font-medium text-lg text-[#3730a3] py-3 px-8 no-underline">
                  İletişim
                </span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
