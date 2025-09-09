import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

import { PiCertificateFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { DiVisualstudio } from "react-icons/di";
import { BsDatabaseFill } from "react-icons/bs";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

function Gallery() {
  const gallery = [
    {
      titulo: "SEINP (En proceso)",
      imagen: "/public/grafico.jpg",
      descripcion:
        "SEINP ofrece capacitación, talleres y asesorías en seguridad para empresas.",
      tecnologias: [
        <FaReact className="gallery-icon hover:text-blue-300" />,
        <FaHtml5 className="gallery-icon hover:text-orange-500" />,
        <FaCss3Alt className="gallery-icon hover:text-blue-500" />,
        <IoLogoJavascript className="gallery-icon hover:text-yellow-300" />,
      ],
      link: "https://randyserra.github.io/seinp-security/",
    },
    {
      titulo: "SEINP (En proceso)",
      imagen: "/public/randy2x2.png",
      descripcion:
        "SEINP ofrece capacitación, talleres y asesorías en seguridad para empresa sasd asdasdasdasd.",
      tecnologias: [
        <FaReact className="gallery-icon hover:text-blue-300" />,
        <FaHtml5 className="gallery-icon hover:text-orange-500" />,
        <FaCss3Alt className="gallery-icon hover:text-blue-500" />,
        <IoLogoJavascript className="gallery-icon hover:text-yellow-300" />,
      ],
      link: "https://randyserra.github.io/seinp-security/",
    },
    {
      titulo: "SEINP (En proceso)",
      imagen: "/public/img.jpeg",
      descripcion:
        "SEINP ofrece capacitación, talleres y asesorías en seguridad para empresas.",
      tecnologias: [
        <FaReact className="gallery-icon hover:text-blue-300" />,
        <FaHtml5 className="gallery-icon hover:text-orange-500" />,
        <FaCss3Alt className="gallery-icon hover:text-blue-500" />,
        <IoLogoJavascript className="gallery-icon hover:text-yellow-300" />,
      ],
      link: "https://randyserra.github.io/seinp-security/",
    },
  ];

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1, // cuántas cards quieres ver a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    vertical: true, // 🔥 carrusel vertical
    verticalSwiping: true,
  };

  return (
    <section className="gallery" id="gallery">
      <div className="titulos-contenedor">
        <h2 className="titulos">
          <PiCertificateFill /> Certificates
        </h2>
        <button className="botones">Download</button>
      </div>

      <Slider {...settings} className="gallery-slider">
        {gallery.map((item, index) => (
          <div className="gallery-card" key={index}>
            {/* Imagen izquierda */}
            <div className="horizontal">
              <div className="gallery-img-container">
                <img
                  className="gallery-img"
                  src={item.imagen}
                  alt={item.titulo}
                />
              </div>

              {/* Contenido derecha */}
              <div className="gallery-content">
                <h3>{item.titulo}</h3>
                <p>{item.descripcion}</p>

                <div className="gallery-footer">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-live"
                    >
                      <IoMdLink /> Live
                    </a>
                  )}
                  <div className="gallery-tech">{item.tecnologias}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Gallery;
