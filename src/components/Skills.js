import { useContext } from "react";
import { SkillDataEng, SkillDataTr } from "../data/SkillsData";
import { LanguageContext } from "../contexts/LanguageContext";
const Skills = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="container mx-auto lg:mx-0">
      {language === "eng" ? (
        <div className="flex justify-center items-center lg:mt-16">
          <div className="flex flex-col items-center lg:items-start lg:flex-wrap border-b border-[#bab2e7]">
            <div id="skillsScroll">
              <h3 className="font-semibold lg:text-5xl text-3xl  leading-[48px] text-[#1f2937] lg:mb-8 mb-4 dark:text-[#aebccf] ">
                Skills
              </h3>
            </div>
            <div className="flex lg:justify-between  items-start gap-12 lg:flex-wrap">
              {SkillDataEng.map((skill) => (
                <div className="flex justify-around w-[30%]" key={skill.name}>
                  <div className="flex flex-row">
                    <div className="flex flex-col text-center lg:text-start justify-between items-start">
                      <div>
                        <h3 className="font-medium lg:text-3xl text-xl text-[#4338ca] lg:mb-8 mb-4 dark:text-[#B7AAFF]">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-[#6b7280] mb-12 dark:text-[#FFFFFF]">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center lg:mt-16">
          <div className="flex flex-col items-center lg:items-start lg:flex-wrap border-b border-[#bab2e7]">
            <div id="skillsScroll">
              <h3 className="font-semibold lg:text-5xl text-3xl  leading-[48px] text-[#1f2937] lg:mb-8 mb-4 dark:text-[#aebccf]">
                Yetenekler
              </h3>
            </div>
            <div className="flex lg:justify-between  items-start gap-12 lg:flex-wrap">
              {SkillDataTr.map((skill) => (
                <div className="flex justify-around w-[30%]" key={skill.name}>
                  <div className="flex flex-row">
                    <div className="flex flex-col text-center lg:text-start justify-between items-start">
                      <div>
                        <h3 className="font-medium lg:text-3xl text-xl text-[#4338ca] lg:mb-8 mb-4 dark:text-[#B7AAFF]">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-[#6b7280] mb-8 dark:text-[#FFFFFF]">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Skills;
