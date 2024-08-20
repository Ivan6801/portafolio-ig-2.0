import "./styles.css";
import ivanImg from "../../assets/images/ivan.jpg";

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: "2rem" }}>
            Hola! Soy <strong>Ivan Gonzalez</strong> <br /> Desarrollador{" "}
            <strong>FullStack </strong>
            <br />
            profesional con <br /> pasión por la <strong>aprendizaje</strong>
          </h1>
          <figure>
            <img
              className="hero-image"
              src={ivanImg}
              width=""
              height="300"
              alt="imagen principal del sitio"
            />
            <div className="ProfileHeader">
              <span>Pro</span>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}
