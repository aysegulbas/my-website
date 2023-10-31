import { useContext } from "react";
import { ProjectsDataEng, ProjectsDataTr } from "../data/ProjectsData";
import { LanguageContext } from "../contexts/LanguageContext";
const Projects2 = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="container mx-auto lg:mx-0">
      {language === "eng" ? (
        <div className="flex justify-center items-center mt-16 flex-wrap ">
          <div className="flex flex-col lg:items-start items-center mb-4">
            <div id="projectsScroll">
              <h3 className="font-semibold lg:text-5xl text-3xl text-center leading-[48px] text-[#1f2937] mb-8 dark:text-[#aebccf]">
                Projects
              </h3>
            </div>
            <div className="flex lg:justify-between lg:items-start lg:text-start justify-center text-center gap-12 mb-12 flex-wrap">
              {ProjectsDataEng.map((project) => (
                <div
                  className="flex justify-around lg:w-[30%] w-[70%]"
                  key={project.title}
                >
                  <div className="flex flex-row">
                    <div className="flex flex-col justify-between items-start">
                      <div>
                        <div>
                          {" "}
                          <img className="projectimg" src={project.img} />
                        </div>
                        <h3 className="font-medium lg:text-3xl text-xl text-[#4338ca] lg:mb-8 mb-4 dark:text-[#B7AAFF]">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#6b7280] mb-8 dark:text-[#FFFFFF]">
                          {project.description}
                        </p>
                        <div className="flex justify-evenly lg:justify-start lg:gap-2.5">
                          <p className="text-[#3730A3] border-2 border-solid rounded-md border-[#3730A3] p-2 mr-4 dark:bg-[#383838] dark:text-[#e1e1ff] dark:border-[#e1e1ff]">
                            {project.detail1}
                          </p>
                          <p className="text-[#3730A3] border-2 border-solid rounded-md border-[#3730A3] p-2 mr-4 dark:bg-[#383838] dark:text-[#e1e1ff] dark:border-[#e1e1ff]">
                            {project.detail2}
                          </p>
                          <p className="text-[#3730A3] border-2 border-solid rounded-md border-[#3730A3] p-2 mr-4 dark:bg-[#383838] dark:text-[#e1e1ff] dark:border-[#e1e1ff]">
                            {project.detail3}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between items-start mt-6 underline gap-2.5">
                          <a
                            className="font-medium text-base leading-4 text-[#3730a3] dark:text-[#E1E1FF]"
                            href={project.github}
                          >
                            Github
                          </a>
                          <a
                            className="font-medium text-base leading-4 text-[#3730a3] dark:text-[#E1E1FF]"
                            href={project.viewsite}
                          >
                            View Site
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-16 flex-wrap">
          <div className="flex flex-col lg:items-start items-center mb-4">
            <div id="projectsScroll">
              <h3 className="font-semibold lg:text-5xl text-3xl text-center leading-[48px] text-[#1f2937] mb-8 dark:text-[#aebccf]">
                Projeler
              </h3>
            </div>
            <div className="flex lg:justify-between lg:items-start lg:text-start justify-center text-center gap-12 mb-12 flex-wrap">
              {ProjectsDataTr.map((project) => (
                <div
                  className="flex justify-around lg:w-[30%] w-[70%]"
                  key={project.title}
                >
                  <div className="flex flex-row">
                    <div className="flex flex-col justify-between items-start">
                      <div>
                        <img className="projectimg" src={project.img} />
                        <h3 className="font-medium lg:text-3xl text-xl text-[#4338ca] lg:mb-8 mb-4 dark:text-[#B7AAFF]">
                          {project.title}
                        </h3>
                        <p className="text-sm text-[#6b7280] mb-8 dark:text-[#FFFFFF]">
                          {project.description}
                        </p>
                        <div className="flex justify-evenly lg:justify-start lg:gap-2.5">
                          <p className="text-[#3730A3] border-2 border-solid rounded-md border-[#3730A3] p-2 mr-4 dark:bg-[#383838] dark:text-[#e1e1ff] dark:border-[#e1e1ff]">
                            {project.detail1}
                          </p>
                          <p className="text-[#3730A3] border-2 border-solid rounded-md border-[#3730A3] p-2 mr-4 dark:bg-[#383838] dark:text-[#e1e1ff] dark:border-[#e1e1ff]">
                            {project.detail2}
                          </p>
                          <p className="text-[#3730A3] border-2 border-solid rounded-md border-[#3730A3] p-2 mr-4 dark:bg-[#383838] dark:text-[#e1e1ff] dark:border-[#e1e1ff]">
                            {project.detail3}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between items-start mt-6 underline gap-2.5">
                          <a
                            className="font-medium text-base leading-4 text-[#3730a3] dark:text-[#E1E1FF] cursor-pointer"
                            href={project.github}
                          >
                            Github
                          </a>
                          <a
                            className="font-medium text-base leading-4 text-[#3730a3] dark:text-[#E1E1FF] cursor-pointer"
                            href={project.viewsite}
                          >
                            View Site
                          </a>
                        </div>
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
export default Projects2;
