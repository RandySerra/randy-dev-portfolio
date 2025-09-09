import "./About.css";
import { useTranslation } from "react-i18next";
import { BsPersonHeart } from "react-icons/bs";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about" id="about">
      <div className="id">
        <h2 className="titulos ">
          < BsPersonHeart/> {t("about_title")}
        </h2>
        <div className="contenedor-about">
          <div className="about-texto">
            <p>{t("about_text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
