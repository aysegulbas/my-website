import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import profil from "../data/images/profil.png";
import { Link } from "react-scroll";

const Bio = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="biocontainer">
      <div className="flex items-center pb-8 pt-12 lg:pb-8">
        <div className="w-32 border-t-2 border-[#3730A3] dark:border-[#BAB2E7]" />
        <h5 className="text-[#4338CA] text-xl leading-7 font-medium pl-4 dark:text-[#B7AAFF] ">
          Ayşegül Baş
        </h5>
      </div>
      <div className="flex lg:flex-row flex-col-reverse lg:justify-between text-center justify-center lg:text-start items-center mb-16">
        <div className="w-3/5 pt-12">
          {language === "eng" ? (
            <h1 className="font-bold text-4xl lg:text-7xl mt-4 text-[#1F2937]  dark:text-[#AEBCCF]">
              Creative thinker <br />
              Minimalism lover
            </h1>
          ) : (
            <h1 className="font-bold text-4xl lg:text-7xl mt-4 text-[#1F2937]  dark:text-[#AEBCCF]">
              {" "}
              Yaratıcı Düşünür <br />
              Minimalist Sever
            </h1>
          )}
          {language === "eng" ? (
            <p className="lg:text-xl text-lg w-4/5 mt-12 mx-auto lg:mx-0 text-[#6B7280] dark:text-[#FFFFFF] ">
              {" "}
              Hi, I’m Ayşegül. I’m a full-stack developer. If you are looking
              for a Developer who to craft solid and scalable frontend products
              with great user experiences. Let’s shake hands with me.
            </p>
          ) : (
            <p className="lg:text-xl text-lg w-4/5 mt-12 mx-auto lg:mx-0 text-[#6B7280] dark:text-[#FFFFFF]">
              Merhaba, ben Ayşegül. Ben bir full-stack geliştiricisiyim.
              Mükemmel kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç
              ürünleri oluşturacak bir Geliştirici arıyorsanız. Benimle el
              sıkışalım.
            </p>
          )}

          <div className="flex flex-row  lg:items-start justify-center lg:justify-start p-0 gap-3 no-underline lg:text-xl mt-14">
            {language === "eng" ? (
              <button className="flex flex-row flex-nowrap justify-center items-center py-3 pl-5 pr-3 gap-2.5 lg:w-32 lg:h-14 w-28 border border-solid border-[#3730a3] bg-[#3730a3] rounded-md cursor-pointer font-medium  text-[#ffffff] dark:bg-[#e1e1ff] dark:text-[#000000]">
                Hire me
              </button>
            ) : (
              <button className="flex flex-row flex-nowrap justify-center items-center py-3 pl-5 pr-3 gap-2.5 lg:w-32 lg:h-14 w-28 border border-solid border-[#3730a3] bg-[#3730a3] rounded-md cursor-pointer font-medium  text-[#ffffff] dark:bg-[#e1e1ff] dark:text-[#000000]">
                İletişim
              </button>
            )}

            <a href="https://github.com/aysegulbas/">
              <button className="flex flex-row justify-center items-center m-auto py-3 pl-5 pr-3 gap-2.5 lg:w-36 lg:h-14 w-28 border border-solid border-[#3730a3] bg-[#ffffff] rounded-md cursor-pointer font-medium  text-[#3730a3] dark:bg-[#383838] dark:text-[#e1e1ff] dark:border-[#e1e1ff]">
                <i class="fa-brands fa-github" aria-hidden="true"></i>
                &nbsp;Github
              </button>
            </a>
            <a href="https://www.linkedin.com/in/ay%C5%9Feg%C3%BCl-ba%C5%9F-1007b065/">
              <button className="flex flex-row justify-center items-center py-3 pl-5 pr-3 gap-2.5 lg:w-36 lg:h-14 w-28 border border-solid border-[#3730a3] bg-[#ffffff] rounded-md cursor-pointer font-medium text-[#3730a3] dark:bg-[#383838] dark:text-[#e1e1ff] dark:border-[#e1e1ff]">
                <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                &nbsp;Linkedin
              </button>
            </a>
          </div>
        </div>

        <img
          className="shadow-[0_8px_28px_6px_rgb(24,39,75,0.12)] rounded-2xl lg:w-[30rem] lg:h-auto w-[50%] mx-auto lg:mx-0"
          src={profil}
        />
      </div>
    </div>
  );
};
export default Bio;
