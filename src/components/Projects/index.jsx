import "./styles.css";
import { Articles } from "../Articles";

export function Projects() {
  return (
    <>
      <section id="portafolio" className="portfolio">
        <div className="container">
          <h2 id="portafolio">Portafolio (Proyectos Destacados)</h2>
          <Articles />
        </div>
      </section>
    </>
  );
}
