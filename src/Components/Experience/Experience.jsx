import "./Experience.css";
import { MdBusinessCenter } from "react-icons/md";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  const experience = t("experience_items", { returnObjects: true });

  return (
    <div className="experience">
      <div>
        <h2 className="titulos">
          < MdBusinessCenter/> {t("experience_title")}
        </h2>
        <div className="experience-list">
          {experience.map((element, index) => (
            <div className="contenedor-experience" key={index}>
              <img
                className="experiencia-img"
                src={index === 0 ? "/randy-dev-portfolio/uae.png" : "/randy-dev-portfolio/loading.gif"} 
                alt={element.name}
              />
              <div className="titulo-parrafo">
                <h3>{element.name}</h3><p>{element.description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
