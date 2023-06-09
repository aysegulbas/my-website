import { useContext } from "react";
import { ProjectsDataEng, ProjectsDataTr } from "../data/ProjectsData";
import { LanguageContext } from "../contexts/LanguageContext";
const Projects2 = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === "eng" ? (
        <div className="skillsContainer">
          <div className="skillsContent">
            <div id="projectsScroll">
              <h3 className="heading-list">Projects</h3>
            </div>
            <div className="skills">
              {ProjectsDataEng.map((project) => (
                <div className="list" key={project.title}>
                  <div className="skill-heading">
                    <div className="skill-list">
                      <div>
                        <div>
                          {" "}
                          <img className="projectimg" src={project.img} />
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="details">
                          <p>{project.detail1}</p>
                          <p>{project.detail2}</p>
                          <p>{project.detail3}</p>
                        </div>
                        <div className="projectlink">
                          <a href={project.github}>Github</a>
                          <a href={project.viewsite}>View Site</a>
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
        <div className="skillsContainer">
          <div className="skillsContent">
            <h3 className="heading-list">Projeler</h3>
            <div className="skills">
              {ProjectsDataTr.map((project) => (
                <div className="list" key={project.title}>
                  <div className="skill-heading">
                    <div className="skill-list">
                      <div>
                        <img className="projectimg" src={project.img} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="details">
                          <p>{project.detail1}</p>
                          <p>{project.detail2}</p>
                          <p>{project.detail3}</p>
                        </div>
                        <div className="projectlink">
                          <a href={project.github}>Github</a>
                          <a href={project.viewsite}>View Site</a>
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
