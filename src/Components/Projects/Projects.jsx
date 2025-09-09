import "./Projects.css";
import { FaFileCode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { DiVisualstudio } from "react-icons/di";
import { BsDatabaseFill } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import { IoMdLink } from "react-icons/io";

function Projects() {
  const project = [
    {
      titulo: "SEINP (En proceso)",
      imagen: "/public/img.jpeg",
      descripcion:
        "SEINP ofrece capacitación, talleres y asesorías en seguridad para empresas.",
      tecnologias: [
        <FaReact className="project-icon hover:text-blue-300" />,
        <FaHtml5 className="project-icon hover:text-orange-500" />,
        <FaCss3Alt className="project-icon hover:text-blue-500" />,
        <IoLogoJavascript className="project-icon hover:text-yellow-300" />,
      ],
      link: "https://randyserra.github.io/seinp-security/",
    },
    {
      titulo: "Biblioteca Serra Torres",
      imagen: "/public/img.jpeg",
      descripcion:
        "Biblioteca Virtual Personal, en la cual implementé diversas tecn.",
      tecnologias: [
        <FaReact className="project-icon hover:text-blue-300" />,
        <FaHtml5 className="project-icon hover:text-orange-500" />,
        <FaCss3Alt className="project-icon hover:text-blue-500" />,
        <IoLogoJavascript className="project-icon hover:text-yellow-300" />,
      ],
      link: "https://randyserra.github.io/seinp-security/",
    },
    {
      titulo: "Sistema Psicologia (En proceso)",
      imagen: "/public/img.png",
      descripcion:
        "Un moderno sistema de gestión de citas de forma rápida, sencilla y eficiente.",
      tecnologias: [
        <DiVisualstudio className="project-icon hover:text-violet-500" />,
        <BsDatabaseFill className="project-icon hover:text-blue-400" />,
        <TbBrandCSharp className="project-icon hover:text-violet-400" />,
      ],
      link: "",
    },
    {
      titulo: "Sistema de visitas ITLA",
      imagen: "/randy2x2.png",
      descripcion:
        "Sistema destinado a la gestión de citas y consultas de visitas para estudiantes del ITLA.",
      tecnologias: [
        <DiVisualstudio className="project-icon hover:text-violet-500" />,
        <BsDatabaseFill className="project-icon hover:text-blue-400" />,
        <TbBrandCSharp className="project-icon hover:text-violet-400" />,
      ],
      link: "",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="titulos">
        <FaFileCode/> Projects
      </h2>

      <div className="project-container">
        {project.map((projects, index) => (
          <div className="projects-card titulo-parrafo" key={index}>
            <div className="projects-img-container">
              <img
                className="project-img"
                src={projects.imagen}
                alt={projects.titulo}
              />
            </div>

            <h3 children="titulo-parrafo">{projects.titulo}</h3>
            <p>{projects.descripcion}</p>

            <div className="projects-footer">
              {projects.link && (
                <a
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botones"
                >
                  <IoMdLink /> Live
                </a>
              )}

              <div className="project-tech">{projects.tecnologias}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
