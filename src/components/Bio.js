import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import profil from "../data/images/profil.png";

const Bio = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="biocontainer">
      <div className="bioname">
        <h5 className="name-line">___________</h5>
        <h5 className="name">Ayşegül Baş</h5>
      </div>
      <div className="biobelow">
        <div className="biobelowleft">
          {language === "eng" ? (
            <h1 className="bioheading">
              Creative thinker <br />
              Minimalism lover
            </h1>
          ) : (
            <h1 className="bioheading">
              {" "}
              Yaratıcı Düşünür <br />
              Minimalist Sever
            </h1>
          )}
          {language === "eng" ? (
            <p className="bioinfo">
              {" "}
              Hi, I’m Ayşegül. I’m a full-stack developer. If you are looking
              for a Developer who to craft solid and scalable frontend products
              with great user experiences. Let’s shake hands with me.
            </p>
          ) : (
            <p className="bioinfo">
              Merhaba, ben Ayşegül. Ben bir full-stack geliştiricisiyim.
              Mükemmel kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç
              ürünleri oluşturacak bir Geliştirici arıyorsanız. Benimle el
              sıkışalım.
            </p>
          )}

          <div className="biobuttons">
            {language === "eng" ? (
              <button className="hirebutton">Hire me</button>
            ) : (
              <button className="hirebutton">İletişim</button>
            )}
            <a href="https://github.com/aysegulbas/">
              <button className="githubbutton">
                <i class="fa-brands fa-github" aria-hidden="true"></i>
                &nbsp;Github
              </button>
            </a>
            <a href="https://www.linkedin.com/in/ay%C5%9Feg%C3%BCl-ba%C5%9F-1007b065/">
              <button className="linkedinbutton">
                <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                &nbsp;Linkedin
              </button>
            </a>
          </div>
        </div>

        <img className="biobelowright" src={profil} />
      </div>
    </div>
  );
};
export default Bio;
