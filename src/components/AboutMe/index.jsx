import "./styles.css";
import { ProgressBar } from "react-bootstrap";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";
import { SiAdobeillustrator, SiDjango } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { PiFileSqlFill } from "react-icons/pi";
import { Button } from "../Articles/styles";
import NET_Core from "../../assets/icons/NET_Core.png";

export function AboutMe() {
  const html = 100;
  const css = 100;
  const js = 100;
  const git = 100;
  const django = 90;
  const wordpress = 100;
  const adobeIllustrator = 70;
  const figma = 90;
  const sql = 90;
  const C = 70;

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
        <Button
          style={{ fontWeight: "bold" }}
          className="text-uppercase"
          onClick={() =>
            window.open("/Ivan-Gonzalez-Gonzalez-CV.pdf", "_blank")
          }
        >
          <p>Ver mi Curriculum vitae</p>
        </Button>
      </div>

      <div className="container">
        <h2>SOBRE LO MISMO</h2>
        <p className="Skill-description">
          Hola, soy Iván Alexander González González. Tengo 7 años de
          experiencia en desarrollo web y móvil como desarrollador Full-Stack.
          Me comunico y trabajo eficazmente en equipo mediante lenguaje escrito
          y herramientas colaborativas como Slack. Actualmente estudio en
          Platzi, donde realizo cursos profesionales de tecnología, y estoy
          cursando la carrera de Arquitectura Front-End con React.js. Tengo 26
          años, soy persona sorda y me apasiona aprender todo lo relacionado con
          la tecnología. Además, disfruto viajar, habiendo visitado ciudades
          como Medellín y Bogotá, Colombia.{" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/197/197575.png"
            width={20}
            height={20}
            alt="col"
          />{" "}
          . 🚀
        </p>
        <h2>EXPERIENCIA</h2>
        <p className="Skill-description">
          - Realicé un proyecto para emprendedores, obteniendo el segundo lugar.
          Estudié en la <strong>Universidad Tecnológica de Tijuana </strong>, en
          la carrera de TSU en Ingeniería en Desarrollo y Gestión de Software,
          donde adquirí sólidos conocimientos en herramientas y metodologías de
          desarrollo de software. 📚
        </p>
        <p className="Skill-description">
          <div>
            <p>
              - Trabajé en <strong>Grupo Guru – Diseño de Páginas Web</strong> en
              Tijuana, B.C., realizando mis{" "}
              <strong>prácticas profesionales en Front-End</strong> durante 4
              meses. Me especialicé en{" "}
              <strong>desarrollo y diseño de sitios web</strong> utilizando{" "}
              <strong>CMS WordPress</strong>, adquiriendo experiencia en la
              creación de páginas funcionales y atractivas adaptadas a las
              necesidades de los clientes. 🛒
            </p>
          </div>
        </p>
        <p className="Skill-description">{" "}
          <div>
            <p>
              - Trabajé en <strong>Industrial G-Global</strong> como{" "}
              <strong>Ingeniero de Software</strong>, con experiencia en{" "}
              <strong>WMS y TMS</strong>, brindando soluciones eficientes para
              el desarrollo de proyectos. Me desempeñé en desarrollo{" "}
              <strong>Full-Stack</strong> mediante <strong>REST APIs</strong>,
              utilizando tecnologías como{" "}
              <strong>
                React.js, Redux, HTML, SCSS, MongoDB, Node.js, SQL, Formik
              </strong>{" "}
              y <strong>Postman</strong>, así como pruebas unitarias y de
              integración para garantizar la calidad del software.
            </p>

            <p>Entre mis responsabilidades destacaron:</p>
            <ul>
              <li>
                <strong>Mantenimiento de sistemas existentes:</strong>{" "}
                ofreciendo soporte a usuarios, resolviendo errores (bugs) y
                atendiendo nuevos requerimientos.
              </li>
              <li>
                <strong>Mejora continua del sistema:</strong> optimizando
                procesos, limpiando código y aplicando buenas prácticas de
                programación para asegurar escalabilidad y eficiencia.
              </li>
            </ul>

            <p>
              Mi enfoque combina habilidades técnicas sólidas con la capacidad
              de mantener y mejorar sistemas complejos de manera organizada y
              profesional. 🔧
            </p>
          </div>
        </p>
        <p className="Skill-description">
          <div>
            <p>
              - Trabajaba en <strong>Hospital Excel California</strong> en un
              sistema de administración de pacientes desarrollado con{" "}
              <strong>Django</strong> y <strong>Python</strong>, utilizando{" "}
              <strong>MySQL</strong> y <strong>PostgreSQL</strong> en{" "}
              <strong>Amazon Web Services</strong>. La herramienta era un
              sistema integral para la construcción de sitios web{" "}
              <strong>Full-Stack</strong> y PMO desarrollado con{" "}
              <strong>React.js</strong> y <strong>TypeScript</strong>.
            </p>

            <p>
              Como desarrollador <strong>Full-Stack</strong>, cuento con
              habilidades sólidas tanto en <strong>front-end</strong> como en{" "}
              <strong>back-end</strong>, lo que me permite construir
              aplicaciones completas y funcionales de manera eficiente.
            </p>

            <p>
              Tengo experiencia resolviendo problemas técnicos complejos y
              adaptándome a distintas tecnologías, incluyendo:
              <strong>
                Ubuntu WSL, Figma, PostgreSQL, MySQL, MongoDB, Material UI,
                Django, Docker, Next.js, JavaScript/TypeScript, API RESTful,
                Node.js
              </strong>{" "}
              y <strong>React</strong>, lo que demuestra mi versatilidad y
              experiencia.
            </p>

            <p>
              Mi enfoque organizado y mis habilidades en desarrollo y gestión de
              bases de datos aportan valor en cualquier equipo. 🏥
            </p>
          </div>
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
                <SiJavascript size={30} /> JavaScript
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
              <div
                style={{ display: "flex", alignItems: "center", marginTop: 25 }}
              >
                <SiDjango size={30} />
                <h5>Django con python</h5>
              </div>
              <ProgressBar
                variant="danger"
                now={`${django}`}
                label={`${django}%`}
              />
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
                <PiFileSqlFill size={30} /> SQL database
              </h5>
              <ProgressBar variant="danger" now={`${sql}`} label={`${sql}%`} />
            </div>
          </div>
          <div className="flex-column Row">
            <div className="Col">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "1rem",
                  marginBottom: "5px",
                }}
              >
                <img
                  style={{ paddingRight: "1rem" }}
                  src={NET_Core}
                  width={40}
                  height={40}
                  alt="NET_Core"
                />
                <h5>.NET Core C#</h5>
              </div>
              <ProgressBar variant="danger" now={`${C}`} label={`${C}%`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
