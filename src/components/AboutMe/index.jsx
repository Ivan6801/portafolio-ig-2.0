import "./styles.css";
import { ProgressBar } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";
import { SiAdobeillustrator, SiDjango } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiStyledcomponents } from "react-icons/si";

export function AboutMe() {
  const html = 100;
  const css = 100;
  const js = 100;
  const git = 100;
  const xml = 80;
  const wordpress = 100;
  const adobeIllustrator = 70;
  const figma = 85;
  const styleComponets = 90;

  return (
    <>
      <div className="container">
        <br />
        <h2>Sobre mí</h2>
        <section className="about-me">
          <h3>
            Nombre: <small>Iván Alexander González González</small>
          </h3>
          <h3>
            Fecha de nacimiento: <small>19 de Octubre de 1999</small>
          </h3>
          <h3>
            Nacionalidad: <small>México</small>
          </h3>
          <h3>
            Ubicación: <small>Tijuana</small>
          </h3>
        </section>
      </div>

      <div className="container">
        <h2>SOBRE LO MISMO</h2>
        <p className="Skill-description">
          Hola soy Iván Alexander González González, Estudio en Platzi cursos
          online profesionales de tecnologia mi carrera Arquitectura Front End
          con React js y tengo 24 años soy sordo y me gusta mucho aprender todo
          lo relacionado con tecnologia. 🚀
        </p>
        <h2>EXPERIENCIA</h2>
        <p className="Skill-description">
          -Estudié en Universidad Tecnológica de Tijuana en la carrera de TSU en
          tecnologia información y comunicación. 📚
        </p>
        <p className="Skill-description">
          -Trabajé en empresa Grupo Guru - Diseño Paginas Web - Tijuana B.C.
          Realizé mis practicas profesionales Frontend donde me especialize en
          la creación de página WEB. utilizando el CMS WordPress por 4 meses. 🛒
        </p>
        <p className="Skill-description">
          -Trabajé en industrial G-Global como Ingeniero de software mi
          experiencia en WMS y TMS brindando soluciones óptimas para el
          desarrollo de proyectos, programación de software tanto para FullStack
          a través de RestApi utilizando tecnologías CRUD como React, Redux,
          Html, Scss, MongoDB, Nodejs, Formik, Postman, SQL y Test.
          Mantenimiento de los sistemas ya desarrollados por el equipo para
          darle soporte al usuario de problemas bugs en el sistema o nuevos
          requerimientos. mejora continua del sistema para optimizar procesos,
          limpiar código y aplicar buenas prácticas de programación para hacer
          un sistema escalabre. 🔧
        </p>
        <h2>HABILIDADES</h2>
        <div className="mb-5 Container">
          <div className="flex-column Row">
            <div className="Col">
              <h5>
                <FaHtml5 size={30} /> HTML5
              </h5>
              <ProgressBar
                variant="danger"
                now={`${html}`}
                label={`${html}%`}
              />
            </div>
            <div className="Col">
              <h5>
                <FaCss3Alt size={30} /> CSS3
              </h5>
              <ProgressBar variant="danger" now={`${css}`} label={`${css}%`} />
            </div>
            <div className="Col">
              <h5>
                <SiJavascript size={30} /> JavaScript ES10
              </h5>
              <ProgressBar variant="danger" now={`${js}`} label={`${js}%`} />
            </div>
          </div>
          <br />
          <div className="flex-column Row">
            <div className="Col">
              <h5>
                <FaGitAlt size={30} /> Git
              </h5>
              <ProgressBar variant="danger" now={`${git}`} label={`${git}%`} />
            </div>
            <div className="Col">
              <div style={{ display: "flex", alignItems: "center" }}>
                <SiDjango size={30} />
                <h5>Django con python</h5>
              </div>
              <ProgressBar variant="danger" now={`${xml}`} label={`${xml}%`} />
            </div>
            <div className="Col">
              <h5>
                <BsWordpress size={30} /> WordPress
              </h5>
              <ProgressBar
                variant="danger"
                now={`${wordpress}`}
                label={`${wordpress}%`}
              />
            </div>
          </div>
          <br />
          <div className="flex-column Row">
            <div className="Col">
              <h5>
                <SiAdobeillustrator size={30} /> Adobe illustrator
              </h5>
              <ProgressBar
                variant="danger"
                now={`${adobeIllustrator}`}
                label={`${adobeIllustrator}%`}
              />
            </div>
            <div className="Col">
              <h5>
                <FiFigma size={30} /> Figma design
              </h5>
              <ProgressBar
                variant="danger"
                now={`${figma}`}
                label={`${figma}%`}
              />
            </div>
            <div className="Col">
              <h5>
                <SiStyledcomponents size={30} /> styled-components
              </h5>
              <ProgressBar
                variant="danger"
                now={`${styleComponets}`}
                label={`${styleComponets}%`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
