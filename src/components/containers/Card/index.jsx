// import react from "../../../assets/certificates/react.jpg";
import htmlCss from "../../../assets/certificates/htmlCss.jpg";
import DesarrolloDeWebOnline from "../../../assets/certificates/DesarrolloDeWebOnline.jpg";
import responsiveDesgin from "../../../assets/certificates/responsiveDesgin.jpg";
import responsiveMobileFirst from "../../../assets/certificates/responsive-design-maquetacion-mobile-first.jpg";
import CssGridLayout from "../../../assets/certificates/CssGridLayout.jpg";
import javascript from "../../../assets/certificates/javascript.jpg";
import git from "../../../assets/certificates/git.jpg";
import frontendDeveloper from "../../../assets/certificates/frontend-developer.jpg";
import BackendNode from "../../../assets/certificates/Backend-con-Node..jpg";
import nestjs from "../../../assets/certificates/nestjs.jpg";
import react from "../../../assets/certificates/react.jpg";
import reactAvanzado from "../../../assets/certificates/react-avanzado.jpg";
import backendPostgresql from "../../../assets/certificates/node-postgresql.jpg";
import frontend_react from "../../../assets/certificates/frontend-react.jpg";
import Django_with_django_rest_framework from "../../../assets/certificates/Django.jpg";
import "../styles.css";

export function Card() {
  return (
    <>
      <section className="post-list">
        <articlce className="post">
          <figure className="post-image">
            <img src={htmlCss} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={DesarrolloDeWebOnline} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={responsiveDesgin} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={responsiveMobileFirst} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={CssGridLayout} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={javascript} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={git} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={frontendDeveloper} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={BackendNode} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={backendPostgresql} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={Django_with_django_rest_framework} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={nestjs} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={react} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
        <articlce className="post">
          <figure className="post-image">
            <img src={reactAvanzado} alt="certificate" />
          </figure>
          <span className="post-overlay">
            <p></p>
          </span>
        </articlce>
      </section>
      
      <section  className="post-list-react">
        <h3>FRONTEND CON REACT</h3>
        <articlce className="post">
          <figure className="post-image-react">
            <img src={frontend_react} alt="certificate" />
          </figure>
          <span>
            <p></p>
          </span>
        </articlce>
      </section>
    </>
  );
}
