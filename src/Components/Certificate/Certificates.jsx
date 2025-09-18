import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Certificates.css";

import { IoHardwareChip } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { PiCertificateFill } from "react-icons/pi";
import { IoMdLink, } from "react-icons/io";
import { MdOutlineScreenshotMonitor } from "react-icons/md";

import { TbWorldSearch } from "react-icons/tb";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobexd,
} from "react-icons/si";
import {
  PiMicrosoftWordLogoFill,
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
  PiMicrosoftOutlookLogoFill,
} from "react-icons/pi";

const iconMap = {
  SiAdobeillustrator: (
    <SiAdobeillustrator className="gallery-icon hover:text-orange-500" />
  ),
  SiAdobephotoshop: (
    <SiAdobephotoshop className="gallery-icon hover:text-orange-500" />
  ),
  SiAdobeindesign: (
    <SiAdobeindesign className="gallery-icon hover:text-blue-500" />
  ),
  SiAdobexd: <SiAdobexd className="gallery-icon hover:text-yellow-300" />,
  TbWorldSearch: (
    <TbWorldSearch className="gallery-icon hover:text-yellow-300" />
  ),
  PiMicrosoftWordLogoFill: (
    <PiMicrosoftWordLogoFill className="gallery-icon hover:text-blue-300" />
  ),
  PiMicrosoftExcelLogoFill: (
    <PiMicrosoftExcelLogoFill className="gallery-icon hover:text-orange-500" />
  ),
  PiMicrosoftPowerpointLogoFill: (
    <PiMicrosoftPowerpointLogoFill className="gallery-icon hover:text-blue-500" />
  ),
  PiMicrosoftOutlookLogoFill: (
    <PiMicrosoftOutlookLogoFill className="gallery-icon hover:text-yellow-300" />
  ),
 IoHardwareChip: (
    <IoHardwareChip className="gallery-icon hover:text-orange-500" />
  ),

   MdOutlineScreenshotMonitor: (
    <MdOutlineScreenshotMonitor className="gallery-icon hover:text-orange-500" />
  ),
};

function Certificate() {
  const { t } = useTranslation();
  const certificates = t("certificates_list", { returnObjects: true });

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <section className="certificates" id="certificates">
      <div className="titulos-contenedor">
        <h2 className="titulos">
          <PiCertificateFill /> {t("certificates_title")}
        </h2>
      </div>

      <Slider {...settings} className="certificates-slider">
        {certificates.map((item, index) => (
          <div className="certificates-card" key={index}>
            <div className="horizontal">
              <div className="certificates-img-container">
                <img
                  className="certificates-img"
                  src={item.imagen}
                  alt={item.titulo}
                />
              </div>

              <div className="certificates-content titulo-parrafo">
                <div className="titulo-parrafo">
                  <h3>{item.titulo}</h3>
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
                      <IoMdLink /> {t("certificates_button_live")}
                    </a>
                  )}
                  <div className="certificates-tech">
                    {item.tecnologias.map((iconName) => iconMap[iconName])}
                  </div>
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
