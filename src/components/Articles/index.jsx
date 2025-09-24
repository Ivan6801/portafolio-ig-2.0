import javascriptVanilla from "../../assets/images-projects/cientifico-vanilla-js.vercel.app_.png";
import taskReact from "../../assets/images-projects/Phone_task.png";
import ReactVite from "../../assets/images-projects/react-vite.png";
import projectUptaskMern from "../../assets/images-projects/proyecto-uptask-mern.png";
import mathPlatzi from "../../assets/images-projects/math-platzi.png";
import reactHooks from "../../assets/images-projects/react-hooks.png";
import reactNativePokemon from "../../assets/images-projects/Pokemon.jpg";
import reactPetgram from "../../assets/images-projects/Petgram.gif";
import E_Commerce from "../../assets/images-projects/eCommerce.png";
import aprende_lsm from "../../assets/images-projects/aprende-lsm.jpg";
import fast_leran from "../../assets/images-projects/fast-leran.png";
import microsoft_net from "../../assets/icons/microsoft.png";
import fullstack_postgres from "../../assets/images-projects/fullstack.png";
import django from "../../assets/images-projects/Django-rest-framework.png";
import mycare from "../../assets/images-projects/mycare.excel.network.png";
import { BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import { FaReact, FaNode } from "react-icons/fa";
import { Button } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import { SiDjango } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiPostman,
  SiTailwindcss,
  SiVite,
  SiPhp,
  SiMysql,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { GrStorage } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";

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

  const handleUrlGitHubProjectFullstackPostgres = () => {
    window.open("https://github.com/Ivan6801/fullstack-postgres", "_blank");
  };

  const handleUrlGitHubMath = () => {
    window.open("https://github.com/Ivan6801/Math", "_blank");
  };

  const handleUrlGitHubReactHooks = () => {
    window.open("https://github.com/Ivan6801/react-hooks", "_blank");
  };

  const handleUrlGitHubReactPetgram = () => {
    window.open("https://github.com/Ivan6801/react-avanzado", "_blank");
  };

  const handleUrlGitHubReactStorePwa = () => {
    window.open("https://github.com/Ivan6801/games-store-pwa", "_blank");
  };

  const handleUrlGitHubDjango = () => {
    window.open("https://gitlab.com/Ivan6801/coffee_shop", "_blank");
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
            <FaNode size={60} color="#80D041" />
            <BiLogoMongodb size={50} color="#4B8E3F" />
            <SiPostman size={50} color="#F76935" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 20/01/2024
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en:</strong>
              <a target="_blank" href="" rel="noreferrer"></a>
            </small>
          </p>
          <Button
            onClick={handleUrlGitHubProjectUptaskMern}
            className="text-uppercase"
          >
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            Proyecto MERN Stack con TailwindCSS Headless UI, Context API, Socket
            IO, MongoDB - FullStack
          </p>
        </div>
        <figure className="project-imageContainer">
          <img
            className="project-image"
            style={{ display: "flex", justifyContent: "center" }}
            width="500"
            src={projectUptaskMern}
            alt="prouyecto del curso de React Native"
          />
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">
            Full Stack con Node.js: Base de Datos con PostgreSQL
          </h3>
          <h6 className="project-course">
            <FaReact size={50} color="#5ED3F3" />
            <FaNode size={60} color="#80D041" />
            <BiLogoPostgresql size={50} color="#336791" />
            <FaDocker size={50} color="#1C60E6" />
            <SiPostman size={50} color="#F76935" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 27/09/2024
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en:</strong>
              <a target="_blank" href="" rel="noreferrer"></a>
            </small>
          </p>
          <Button
            onClick={handleUrlGitHubProjectFullstackPostgres}
            className="text-uppercase"
          >
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            E-commerce o Tienda Online con React.js y Node.js con PostgreSQL
            Conecta API REST con bases de datos relacionales. Domina Sequelize,
            el ORM más popular en JavaScript. Trabaja consultas, relaciones y
            migraciones - FullStack
          </p>
        </div>
        <figure className="project-imageContainer">
          <img
            className="project-image"
            style={{ display: "flex", justifyContent: "center" }}
            width="500"
            src={fullstack_postgres}
            alt="prouyecto del curso de React Native"
          />
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">Petgram</h3>
          <h6 className="project-course">
            <FaReact size={50} color="#5ED3F3" />
            <SiJavascript size={40} color="#E9B928" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 10/02/2022
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en:</strong>
              <a
                target="_blank"
                href="https://react-avanzado-blond.vercel.app/"
                rel="noreferrer"
              >
                https://react-avanzado-blond.vercel.app/
              </a>
            </small>
          </p>
          <Button
            onClick={handleUrlGitHubReactPetgram}
            className="text-uppercase"
          >
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            Crea una aplicación para subir y compartir fotos de mascotas usando
            Webpack, GraphQL, React Hooks, React Router, SEO y PWAs.
          </p>
        </div>
        <figure className="project-imageContainer">
          <a
            target="_blank"
            href="https://react-avanzado-blond.vercel.app/"
            rel="noreferrer"
          >
            <img
              className="project-image"
              style={{ display: "flex", justifyContent: "center" }}
              width="200"
              src={reactPetgram}
              alt="prouyecto del curso de React Native"
            />
          </a>
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">Página web de matemáticas</h3>
          <h6 className="project-course">
            <SiJavascript size={40} color="#E9B928" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 14/12/2020
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en: </strong>
              <a
                target="_blank"
                href="https://ivan6801.github.io/Math/"
                rel="noreferrer"
              >
                https://ivan6801.github.io/Math/
              </a>
            </small>
          </p>
          <Button onClick={handleUrlGitHubMath} className="text-uppercase">
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            Practica todo lo que has aprendido de JavaScript para crear una
            página web con diferentes ejercicios básicos de matemáticas.
          </p>
        </div>
        <figure className="project-imageContainer">
          <a
            target="_blank"
            href="https://ivan6801.github.io/Math/"
            rel="noreferrer"
          >
            <img
              className="project-image"
              style={{ display: "flex", justifyContent: "center" }}
              width="500"
              src={mathPlatzi}
              alt="prouyecto del curso de React Native"
            />
          </a>
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">Introducción a React Hooks</h3>
          <h6 className="project-course">
            <FaReact size={50} color="#5ED3F3" />
            <SiJavascript size={40} color="#E9B928" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 30/01/2022
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en:</strong>
              <a
                target="_blank"
                href="https://intro-hooks.netlify.app/"
                rel="noreferrer"
              >
                https://intro-hooks.netlify.app/
              </a>
            </small>
          </p>
          <Button
            onClick={handleUrlGitHubReactHooks}
            className="text-uppercase"
          >
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            Proyecto con todos los hooks de React. | useState, useEffect,
            useReducer, useMemo, useRef, useCallback
          </p>
        </div>
        <figure className="project-imageContainer">
          <a
            target="_blank"
            href="https://intro-hooks.netlify.app/"
            rel="noreferrer"
          >
            <img
              className="project-image"
              style={{ display: "flex", justifyContent: "center" }}
              width="500"
              src={reactHooks}
              alt="prouyecto del curso de React Native"
            />
          </a>
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">Tiendas de bebidas (E-commerce)</h3>
          <h6 className="project-course">
            <FaReact size={50} color="#5ED3F3" />
            <SiJavascript size={40} color="#E9B928" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 10/02/2022
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en:</strong>
              <a
                target="_blank"
                href="https://games-store-pwa.vercel.app/"
                rel="noreferrer"
              >
                https://games-store-pwa.vercel.app/
              </a>
            </small>
          </p>
          <Button
            onClick={handleUrlGitHubReactStorePwa}
            className="text-uppercase"
          >
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            Desarrolla aplicaciones web con React Hooks. Integra herramientas
            como Strapi, React Helmet el SEO, React Icons, PWA, Jest, PayPal
            para desarrollar una tienda online con carrito de compras. Incorpora
            componentes funcionales.
          </p>
        </div>
        <figure className="project-imageContainer">
          <a
            target="_blank"
            href="https://games-store-pwa.vercel.app/"
            rel="noreferrer"
          >
            <img
              className="project-image"
              style={{ display: "flex", justifyContent: "center" }}
              width="500"
              src={E_Commerce}
              alt="prouyecto del curso de React Native"
            />
          </a>
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">React Native: Pokemon</h3>
          <h6 className="project-course">
            <FaReact size={50} color="#5ED3F3" />
            <SiJavascript size={40} color="#E9B928" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 29/03/2022
            </small>
          </p>
          <p className="project-description">
            Aprende a manejar listas y consumir APIs en React Native. Desarrolla
            los componentes, pantallas y navegación de aplicación.
          </p>
          <h2>
            API:{" "}
            <a
              style={{ fontSize: 14, textTransform: "lowercase" }}
              href="https://pokeapi.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pokeapi.co/
            </a>
          </h2>
        </div>
        <figure className="project-imageContainer">
          <img
            className="project-image"
            style={{ display: "flex", justifyContent: "center" }}
            width="200"
            src={reactNativePokemon}
            alt="proyecto del curso de React Native"
          />
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">Django Rest Framework backend</h3>
          <h6 className="project-course">
            <SiDjango size={50} color="#113426" />
            <FaAws size={50} color="#FF9C08" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 14/11/2024
            </small>
          </p>
          <Button onClick={handleUrlGitHubDjango} className="text-uppercase">
            <AiFillGithub size={20} />
            <p>Ver código</p>
          </Button>
          <p className="project-description">
            Realice Django, la herramienta todo en uno para construcción de
            sitios web #1 en el ecosistema de Python y AWS
          </p>
        </div>
        <figure className="project-imageContainer">
          <img
            className="project-image"
            style={{ display: "flex", justifyContent: "center" }}
            src={django}
            alt="proyecto del curso de React Native"
          />
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">My Care Next con TypeScript</h3>
          <h6 className="project-course">
            <SiNextdotjs size={50} color="#000" />
            <FaNode size={60} color="#80D041" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 16/06/2025
            </small>
          </p>
          <p className="project-url">
            <small>
              <strong>Puedes verlo en:</strong>
              <a
                target="_blank"
                href="https://mycare.excel.network/"
                rel="noreferrer"
              >
                https://mycare.excel.network/
              </a>
            </small>
          </p>
          <p className="project-description">
            My Care es un servicio / plataforma médica gestionada por Hospital
            Excel en Tijuana orientada al turismo médico Usar herramientas como
            nuevas tecnologías: Next con TypeScript, Node.js (Contacto), Framer
            Motion (animación), Google Maps API y Tailwind CSS
          </p>
        </div>
        <figure className="project-imageContainer">
          <a
            target="_blank"
            href="https://mycare.excel.network/"
            rel="noreferrer"
          >
            <img
              className="project-image"
              style={{ display: "flex", justifyContent: "center" }}
              src={mycare}
              alt="proyecto del curso de React Native"
            />
          </a>
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">Aprende señas app</h3>
          <h6 className="project-course">
            <SiPhp size={50} color="#4D588E" />
            <SiMysql size={50} color="#4D588E" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 12/06/2018
            </small>
          </p>
          <p className="project-description">
            Aprender Lengua de Señas Mexicana en linea por videos gratis.
          </p>
        </div>
        <figure className="project-imageContainer">
          <img
            className="project-image"
            style={{ display: "flex", justifyContent: "center" }}
            width="500"
            src={aprende_lsm}
            alt="proyecto del curso de React Native"
          />
        </figure>
      </article>

      <article className="project">
        <div className="project-details">
          <h3 className="project-title">Fast Learn</h3>
          <h6 className="project-course">
            <img src={microsoft_net} width={50} alt="microsoft" />
            <SiMicrosoftsqlserver size={50} color="#4D588E" />
          </h6>
          <p className="project-date">
            <small>
              <strong>Fecha:</strong> 01/12/2017
            </small>
          </p>
          <p className="project-description">
            Le presentamos un nuevo proyecto empresarial en el que hemos creado
            una aplicación para las personas oyentes que deseen aprender lengua
            de señas para poder comunicarse con las personas que padecen
            discapacidad auditiva. Hemos elaborado un documento para detallar
            los objetivos del sistema de programación, organizándolo de manera
            que todo quede claro y fácil de entender. En este documento,
            presentamos cómo utilizar el sistema, ya que lanzaremos una
            aplicación. En la hoja se mostrará cada detalle y el nombre del
            sistema.
          </p>
        </div>
        <figure className="project-imageContainer">
          <img
            className="project-image"
            style={{ display: "flex", justifyContent: "center" }}
            width="500"
            src={fast_leran}
            alt="proyecto del curso de React Native"
          />
        </figure>
      </article>
    </>
  );
}
