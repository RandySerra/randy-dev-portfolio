import "./Menuhorizontal.css";
import ThemeToggle from "../../assets/ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { BsPersonHeart } from "react-icons/bs";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { MdBusinessCenter } from "react-icons/md";
import { FaFileCode, FaBars, FaTimes } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";


function Menuhorizontal() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const menu = [
    { nombre: t("home"), icono: < BsPersonCircle   />, to: "home" },
    { nombre: t("about"), icono: < BsPersonHeart  />, to: "about" },
    { nombre: t("skills"), icono: <HiCodeBracketSquare />, to: "skills" },
    { nombre: t("experience"), icono: <MdBusinessCenter />, to: "experience" },
    { nombre: t("projects"), icono: <FaFileCode />, to: "projects" },
    { nombre: t("certificate"), icono: <PiCertificateFill />, to: "certificates" },
  ];

  return (
    <div className="menuhorizontal-contenedor">
      <div className="menuhorizontal-left">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      <div className="menuhorizontal-card">
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`menuhorizontal-ul ${open ? "open" : ""}`}>
          {menu.map((element, index) => (
            <li key={index}>
              <Link
                className="menuhorizontal-li"
                to={element.to}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setOpen(false)}
              >
                {element.icono}
                {element.nombre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menuhorizontal;
