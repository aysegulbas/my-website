import { useContext } from "react";
import { SkillDataEng, SkillDataTr } from "../data/SkillsData";
import { LanguageContext } from "../contexts/LanguageContext";
const Skills = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === "eng" ? (
        <div className="skillsContainer">
          <div className="skillsContent">
            <div id="skillsScroll">
              <h3 className="heading-list">Skills</h3>
            </div>
            <div className="skills">
              {SkillDataEng.map((skill) => (
                <div className="list" key={skill.name}>
                  <div className="skill-heading">
                    <div className="skill-list">
                      <div>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
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
            <h3 className="heading-list">Yetenekler</h3>
            <div className="skills">
              {SkillDataTr.map((skill) => (
                <div className="list" key={skill.name}>
                  <div className="skill-heading">
                    <div className="skill-list">
                      <div>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
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
