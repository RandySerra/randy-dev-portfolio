import "./Projects.css";
import { FaFileCode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { DiVisualstudio } from "react-icons/di";
import { BsDatabaseFill } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import { SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiAdobexd } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const projectsText = t("projects_list", { returnObjects: true });

  const project = [
    {
      imagen: "/randy-dev-portfolio/Projects/ma.png",
      tecnologias: [
        <FaHtml5 className="project-icon hover:text-orange-500" />,
        <FaCss3Alt className="project-icon hover:text-blue-500" />,
        <IoLogoJavascript className="project-icon hover:text-yellow-300" />,
      ],
      link: "",
    },
    {
      imagen: "/randy-dev-portfolio/Projects/Graphic_Designer.png",
      tecnologias: [
        <FaReact className="project-icon hover:text-blue-300" />,
        <FaHtml5 className="project-icon hover:text-orange-500" />,
        <FaCss3Alt className="project-icon hover:text-blue-500" />,
        <IoLogoJavascript className="project-icon hover:text-yellow-300" />,
      ],
      link: "https://randyserra.github.io/Portafolio-Sherteline/",
    },
    {
      imagen: "/randy-dev-portfolio/Projects/seinp_web.png",
      tecnologias: [
        <FaReact className="project-icon hover:text-blue-300" />,
        <FaHtml5 className="project-icon hover:text-orange-500" />,
        <FaCss3Alt className="project-icon hover:text-blue-500" />,
        <IoLogoJavascript className="project-icon hover:text-yellow-300" />,
      ],
      link: "https://randyserra.github.io/randy-dev-portfolio/seinp-security/",
    },
    {
      imagen: "/randy-dev-portfolio/Projects/prototipo.png",
      tecnologias: [
        <SiFigma className="project-icon hover:text-violet-500" />,
        <SiAdobeillustrator className="project-icon hover:text-blue-400" />,
      ],
      link: "https://www.figma.com/proto/un8weMU5ZoddkhmbRHELhl/Download-App--Community-?node-id=0-1&t=O0il6tER5MQABmX6-1",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="titulos">
        <FaFileCode /> {t("projects_title")}
      </h2>

      <div className="project-container">
        {project.map((proj, index) => (
          <div className="projects-card titulo-parrafo" key={index}>
            <div className="projects-img-container">
              <img
                className="project-img"
                src={proj.imagen}
                alt={projectsText[index].titulo}
              />
            </div>

            <h3>{projectsText[index].titulo}</h3>
            <p>{projectsText[index].descripcion}</p>

            <div className="projects-footer">
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botones"
                >
                  <IoMdLink /> {t("projects_live")}
                </a>
              )}

              <div className="project-tech">{proj.tecnologias}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
