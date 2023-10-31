import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = ({}) => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="w-full h-96 mt-12 bg-[#F9F9F9] flex items-center dark:bg-[#141414]">
      <div className="container mx-auto">
        <div className="flex h-2/3 dark:text-[#aebccf]">
          {language === "eng" ? (
            <h2 className=" flex items-center text-center mx-auto lg:text-start lg:mx-0 font-semibold text-[42px] leading-[52px]">
              {" "}
              Let’s work together on <br /> your next product.
            </h2>
          ) : (
            <h2 className="flex items-center text-center mx-auto lg:text-start lg:mx-0 font-semibold text-[42px] leading-[52px]">
              Haydi sonraki ürününüz için
              <br /> birlikte çalışalım.
            </h2>
          )}
        </div>

        <div className="flex flex-col items-center gap-y-4 lg:flex-row lg:justify-between pt-12 m-auto  ">
          <a
            href="mailto:aysgl_nese@hotmail.com"
            className="font-medium text-xl tracking-wider underline text-[#af0c48] dark:text-[#BAB2E7]  "
          >
            <div id="contactScroll">👉aysgl_nese@hotmail.com</div>
          </a>

          <div className="flex flex-row content-between gap-5">
            <div>
              {language === "eng" ? (
                <div className="font-medium text-lg dark:text-[#e1e1ff]">
                  Personal Blog
                </div>
              ) : (
                <div className="font-medium text-lg dark:text-[#e1e1ff]">
                  Kişisel Blog
                </div>
              )}
            </div>
            <a
              href="https://github.com/aysegulbas/"
              className="font-medium text-lg tracking-wide text-[#00ab6b] no-underline"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/ay%C5%9Feg%C3%BCl-ba%C5%9F-1007b065"
              className="font-medium text-lg tracking-wide text-[#0077b5] no-underline"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
