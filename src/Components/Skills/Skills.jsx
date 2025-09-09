import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";
import { useTranslation } from "react-i18next";

import {
  FaHtml5,
  FaJsSquare,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaGitSquare,
  FaBootstrap,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { SiAdobeillustrator, SiAdobephotoshop, SiFigma, SiAdobexd } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { nombre: "Html5", logo: <FaHtml5 /> },
  { nombre: "Css3", logo: <FaCss3Alt /> },
  { nombre: "Js", logo: <FaJsSquare /> },
  { nombre: "React", logo: <FaReact /> },
  { nombre: "CSharp", logo: <TbBrandCSharp /> },
  { nombre: "Python", logo: <FaPython /> },
  { nombre: "My SQL", logo: <GrMysql /> },
  { nombre: "Server SQL", logo: <DiMsqlServer /> },
  { nombre: "Git", logo: <FaGitSquare /> },
  { nombre: "Tailwind ", logo: <RiTailwindCssFill /> },
  { nombre: "Bootstrap ", logo: <FaBootstrap /> },
  { nombre: "Figma", logo: <SiFigma /> },
  { nombre: "Ai", logo: <SiAdobeillustrator /> },
  { nombre: "Xd", logo: <SiAdobexd /> },
  { nombre: "Ps", logo: <SiAdobephotoshop /> },
];

const Skills = () => {
  const { t } = useTranslation();

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // muestra 4 iconos a la vez
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="skills" id="SkillS"></div>

      <div className="carrusel-wrapper">
        <h2 className="titulos">
          <HiCodeBracketSquare />
          {t("skills_title")}
        </h2>
        <Slider {...settings} className="slider">
          {skills.map((tec, index) => (
            <div className="carrusel-item" key={index}>
              <div className="icono">
                {tec.logo}
                {tec.code}
              </div>
              <p>{tec.nombre}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Skills;
