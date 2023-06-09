import { useContext } from "react";
import { ProjectsDataEng, ProjectsDataTr } from "../data/ProjectsData";
import { LanguageContext } from "../contexts/LanguageContext";
const Projects = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === "eng" ? (
        <div className="skillcontainer">
          <div className="skillcontent">
            <h3>Projects</h3>

            <div className="skills">
              {ProjectsDataEng.map((project) => (
                <div key={project.title}>
                  <img src={project.img} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="details">
                    <p>{project.detail1}</p>
                    <p>{project.detail2}</p>
                    <p>{project.detail3}</p>
                  </div>
                  <div className="projectlink">
                    <p>Github</p>
                    <p>View Site</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="skillcontainer">
          <div className="skillcontent">
            <h3>Projeler</h3>

            <div className="skills">
              {ProjectsDataTr.map((project) => (
                <div key={project.title}>
                  <img src={project.img} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="details">
                    <p>{project.detail1}</p>
                    <p>{project.detail2}</p>
                    <p>{project.detail3}</p>
                  </div>
                  <div className="projectlink">
                    <p>Github</p>
                    <p>View Site</p>
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
export default Projects;
