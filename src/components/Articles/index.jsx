import javascriptVanilla from "../../assets/images-projects/cientifico-vanilla-js.vercel.app_.png";
import { BiLogoJavascript } from "react-icons/bi";

export function Articles() {
  return (
    <article className="project">
      <div className="project-details">
        <h3 className="project-title">JavaScript Vanilla</h3>
        <h6 className="project-course">
          <BiLogoJavascript size={50} color="#E9B928" /> 
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
              rel="noreferrer"
            >
              https://cientifico-vanilla-js.vercel.app/
            </a>
          </small>
        </p>
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
  );
}
