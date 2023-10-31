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
        <div className="border-b border-[#bab2e7] mt-16">
          <div className="mt-4">
            <h3 className="lg:mb-8 mb-4 font-semibold lg:text-5xl text-3xl text-center lg:text-start leading-[48px] text-[#1f2937] dark:text-[#AEBCCF]">
              Profile
            </h3>
            <div className="lg:flex lg:justify-between">
              <div className="mb-12">
                <h5 className="font-medium lg:text-3xl text-xl text-[#4338ca] lg:mb-8 mb-4 dark:text-[#B7AAFF]">
                  Profile
                </h5>
                <div className="flex justify-start dark:text-[#FFFFFF]">
                  <div className="w-48 lg:text-xl text-lg leading-9 font-semibold tracking-wide">
                    <p>{ProfilLabelEng.key1}</p>
                    <p>{ProfilLabelEng.key2}</p>
                    <p>{ProfilLabelEng.key3}</p>
                    <br />
                    <p>
                      <p>{ProfilLabelEng.key4}</p>
                    </p>
                  </div>
                  <div className=" lg:text-xl text-lg tracking-wide leading-9 ml-12">
                    <p>{ProfilDesEng.des1}</p>
                    <p>{ProfilDesEng.des2}</p>
                    <p>{ProfilDesEng.des3}</p>
                    <p>{ProfilDesEng.des3add}</p>
                    <p>{ProfilDesEng.des4}</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/4 text-start mr-12 text-lg mb-12 text-[#6b7280] dark:text-[#FFFFFF]">
                <h5 className="font-medium lg:text-3xl text-xl text-[#4338ca] lg:mb-8 mb-4 dark:text-[#B7AAFF]">
                  About me
                </h5>
                <p>{ProfilAboutEng.about}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-b border-[#bab2e7] mt-16">
          <div className="mt-4">
            <h3 className="lg:mb-8 mb-4 font-semibold lg:text-5xl text-3xl text-center lg:text-start leading-[48px] text-[#1f2937] dark:text-[#AEBCCF]">
              Profil
            </h3>
            <div className="lg:flex lg:justify-between">
              <div className="mb-12">
                <h5 className="font-medium lg:text-3xl text-xl text-[#4338ca] lg:mb-8 mb-4 dark:text-[#B7AAFF]">
                  Profil
                </h5>
                <div className="flex justify-start dark:text-[#FFFFFF]">
                  <div className="w-48 lg:text-xl text-lg leading-9 font-semibold tracking-wide">
                    <p>{ProfilLabelTr.key1}</p>
                    <p>{ProfilLabelTr.key2}</p>
                    <p>{ProfilLabelTr.key3}</p>
                    <br />
                    <p>
                      <p>{ProfilLabelTr.key4}</p>
                    </p>
                  </div>
                  <div className="lg:text-xl text-lg tracking-wide leading-9 ml-12">
                    <p>{ProfilDesTr.des1}</p>
                    <p>{ProfilDesTr.des2}</p>
                    <p>{ProfilDesTr.des3}</p>
                    <p>{ProfilDesTr.des3add}</p>
                    <p>{ProfilDesTr.des4}</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/4 text-start mr-12 text-lg mb-12 text-[#6b7280] dark:text-[#FFFFFF]">
                <h5 className="font-medium lg:text-3xl text-xl text-[#4338ca] lg:mb-8 mb-4 dark:text-[#B7AAFF]">
                  Hakkımda
                </h5>
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
