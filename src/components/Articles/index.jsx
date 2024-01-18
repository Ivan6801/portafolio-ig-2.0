import javascriptVanilla from "../../assets/images-projects/cientifico-vanilla-js.vercel.app_.png";
import taskReact from "../../assets/images-projects/Phone_task.png";
import ReactVite from "../../assets/images-projects/react-vite.png";
import projectUptaskMern from "../../assets/images-projects/proyecto-uptask-mern.png";
import { BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import { FaReact, FaNode  } from "react-icons/fa";
import { Button } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { SiJavascript, SiPostman, SiTailwindcss, SiVite  } from "react-icons/si";
import { GrStorage } from "react-icons/gr";

export function Articles() {
  const handleUrlGitHubjavascriptVanilla = () => {
    window.open("https://gitlab.com/Ivan6801/cientifico-js", "_blank");
  };

  const handleUrlGitHubtaskReact = () => {
    window.open("https://gitlab.com/Ivan6801/task-react", "_blank");
  };

  const handleUrlGitHubReactVite = () => {
    window.open("https://github.com/Ivan6801/shopi", "_blank");
  };

  const handleUrlGitHubProjectUptaskMern = () => {
    window.open("https://github.com/Ivan6801/MERN", "_blank");
  };

  return (
    <>
      <article className="project">
        <div className="project-details">
          <h3 className="project-title">JavaScript Vanilla</h3>
          <h6 className="project-course">
            <BiLogoJavascript size={50} color="#E9B928" />
            <SiVite size={50} color="#B44BFA" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 14/12/2020
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en:</strong>
              <a
                target="_blank"
                href="https://cientifico-vanilla-js.vercel.app/"
                z
                rel="noreferrer"
              >
                https://cientifico-vanilla-js.vercel.app/
              </a>
            </small>
          </p>
          <Button
            onClick={handleUrlGitHubjavascriptVanilla}
            className="text-uppercase"
          >
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            Crea una aplicación web de página única y cárgala con información
            usando JavaScript Vanilla. Diseña una experiencia fluida para tus
            usuarios llamando a una API para mostrar la información y navegar
            entre los detalles de cada personaje.
          </p>
        </div>
        <figure className="project-imageContainer">
          <a
            target="_blank"
            href="https://cientifico-vanilla-js.vercel.app/"
            rel="noreferrer"
          >
            <img
              className="project-image"
              width="500"
              src={javascriptVanilla}
              alt="prouyecto del curso de React Native"
            />
          </a>
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">React.js Task</h3>
          <h6 className="project-course">
            <FaReact size={50} color="#5ED3F3" />
            <GrStorage size={40} />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 11/01/2022
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en:</strong>
              <a
                target="_blank"
                href="https://task-react-delta.vercel.app/"
                rel="noreferrer"
              >
                https://task-react-delta.vercel.app/
              </a>
            </small>
          </p>
          <Button onClick={handleUrlGitHubtaskReact} className="text-uppercase">
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            Trabaje con componentes, props, estilos CSS, estados y efectos de
            React. Implementa React Context, React Portals y almacenamiento con
            Local Storage.
          </p>
        </div>
        <figure className="project-imageContainer">
          <a
            target="_blank"
            href="https://task-react-delta.vercel.app/"
            rel="noreferrer"
          >
            <img
              className="project-image"
              style={{ display: "flex", justifyContent: "center" }}
              width="200"
              src={taskReact}
              alt="prouyecto del curso de React Native"
            />
          </a>
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title"> React.js con Vite.js y TailwindCSS</h3>
          <h6 className="project-course">
            <FaReact size={50} color="#5ED3F3" />
            <SiTailwindcss size={50} color="#2f9cca" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 15/09/2023
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en:</strong>
              <a
                target="_blank"
                href="https://shopi-ochre.vercel.app/"
                rel="noreferrer"
              >
                https://shopi-ochre.vercel.app/
              </a>
            </small>
          </p>
          <Button onClick={handleUrlGitHubReactVite} className="text-uppercase">
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            Construye un E-commerce o Tienda Online con React.js, la herramienta
            de mayor demanda para frontend developers. Integra Vite.js para el
            entorno de desarrollo, TailwindCSS para el manejo de estilos y React
            Router DOM para las rutas y navegación. Transforma prototipos de
            Figma en aplicaciones web profesionales y desplegadas a producción.
          </p>
        </div>
        <figure className="project-imageContainer">
          <a
            target="_blank"
            href="https://shopi-ochre.vercel.app/"
            rel="noreferrer"
          >
            <img
              className="project-image"
              style={{ display: "flex", justifyContent: "center" }}
              width="500"
              src={ReactVite}
              alt="prouyecto del curso de React Native"
            />
          </a>
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">MERN stack front to back</h3>
          <h6 className="project-course">
            <FaReact size={50} color="#5ED3F3" />
            <SiJavascript size={40} color="#E9B928" />
            <FaNode  size={60} color="#80D041" />
            <BiLogoMongodb  size={50} color="#4B8E3F" />
            <SiPostman  size={50} color="#F76935" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 20/01/2024
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en:</strong>
              <a
                target="_blank"
                href=""
                rel="noreferrer"
              >

              </a>
            </small>
          </p>
          <Button onClick={handleUrlGitHubProjectUptaskMern} className="text-uppercase">
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            Proyecto MERN Stack con TailwindCSS Headless UI, Context API, Socket
            IO - FullStack
          </p>
        </div>
        <figure className="project-imageContainer">
          <a
            target="_blank"
            href=""
            rel="noreferrer"
          >
            <img
              className="project-image"
              style={{ display: "flex", justifyContent: "center" }}
              width="500"
              src={projectUptaskMern}
              alt="prouyecto del curso de React Native"
            />
          </a>
        </figure>
      </article>
    </>
  );
}
