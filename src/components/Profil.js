import { useContext } from "react";
import {
  ProfilLabelEng,
  ProfilLabelTr,
  ProfilDesEng,
  ProfilDesTr,
  ProfilAboutEng,
  ProfilAboutTr,
} from "../data/ProfilData";
import { LanguageContext } from "../contexts/LanguageContext";
const Profil = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      {language === "eng" ? (
        <div className="profilcontainer">
          <div className="profilcontent">
            <h3 className="profileheading">Profile</h3>
            <div className="profilebelow">
              <div className="profileleft">
                <h5 className="profilsubhead">Profile</h5>
                <div className="profilinfo">
                  <div className="leftlabel">
                    <p>{ProfilLabelEng.key1}</p>
                    <p>{ProfilLabelEng.key2}</p>
                    <p>{ProfilLabelEng.key3}</p>
                    <br />
                    <p>
                      <p>{ProfilLabelEng.key4}</p>
                    </p>
                  </div>
                  <div className="leftdes">
                    <p>{ProfilDesEng.des1}</p>
                    <p>{ProfilDesEng.des2}</p>
                    <p>{ProfilDesEng.des3}</p>
                    <p>{ProfilDesEng.des3add}</p>
                    <p>{ProfilDesEng.des4}</p>
                  </div>
                </div>
              </div>
              <div className="profileright">
                <h5 className="profilsubhead">About me</h5>
                <p>{ProfilAboutEng.about}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="profilcontainer">
          <div className="profilcontent">
            <h3 className="profileheading">Profile</h3>
            <div className="profilebelow">
              <div className="profileleft">
                <h5 className="profilsubhead">Profil</h5>
                <div className="profilinfo">
                  <div className="leftlabel">
                    <p>{ProfilLabelTr.key1}</p>
                    <p>{ProfilLabelTr.key2}</p>
                    <p>{ProfilLabelTr.key3}</p>
                    <br />
                    <p>
                      <p>{ProfilLabelTr.key4}</p>
                    </p>
                  </div>
                  <div className="leftdes">
                    <p>{ProfilDesTr.des1}</p>
                    <p>{ProfilDesTr.des2}</p>
                    <p>{ProfilDesTr.des3}</p>
                    <p>{ProfilDesTr.des3add}</p>
                    <p>{ProfilDesTr.des4}</p>
                  </div>
                </div>
              </div>
              <div className="profileright">
                <h5 className="profilsubhead">Hakkımda</h5>
                <p>{ProfilAboutTr.hakkımda}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profil;
