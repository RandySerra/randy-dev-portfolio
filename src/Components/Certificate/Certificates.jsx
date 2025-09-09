import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certificates.css";

import { PiCertificateFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

function Certificate() {
  const certificates = [
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
      imagen: "/public/Microsoft.jpg",
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
    speed: 800,
    slidesToShow: 1, // cuántas cards quieres ver a la vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    vertical: true, // 🔥 carrusel vertical
    verticalSwiping: true,
  };

  return (
    <section className="certificates" id="certificates">
      <div className="titulos-contenedor">
        <h2 className="titulos">
          <PiCertificateFill /> Certificates
        </h2>
        <button className="botones">Download</button>
      </div>

      <Slider {...settings} className="certificates-slider">
        {certificates.map((item, index) => (
          <div className="certificates-card" key={index}>
            {/* Imagen izquierda */}
            <div className="horizontal">
              <div className="certificates-img-container">
                <img
                  className="certificates-img"
                  src={item.imagen}
                  alt={item.titulo}
                />
              </div>

              {/* Contenido derecha */}
              <div className="certificates-content titulo-parrafo">
                <div className="titulo-parrafo">
                  {" "}
                  <h3 >{item.titulo}</h3>
                  <p>{item.descripcion}</p>
                </div>

                <div className="certificates-footer">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="botones"
                    >
                      <IoMdLink /> Live
                    </a>
                  )}
                  <div className="certificates-tech">{item.tecnologias}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Certificate;
