import "./Home.css";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const botones = t("home_buttons", { returnObjects: true });

  const getIcon = (type) => {
    switch (type) {
      case "email":
        return <SiGmail />;
      case "cv":
        return <FaFilePdf />;
      case "linkedin":
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <div id="home" className="home">
      <div className="home-contenido">
        {/* Foto */}
        <div className="home-foto">
          <img src="/randy2x2.png" alt="Randy profile" />
        </div>

        {/* Info */}
        <div className="home-me">
          <h1 className="text-5xl typewriter">{t("home_title")}</h1>
          <p className="text-2xl">{t("home_subtitle")}</p>

          {/* Botones */}
          <div className="home-botones">
            {botones.map((element, index) => (
              <a
                key={index}
                className="botones"
                href={element.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getIcon(element.type)}
                {element.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
