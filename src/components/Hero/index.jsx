import "./styles.css";
import ivanImg from "../../assets/images/ivan2.jpg";

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: '2rem' }}>
            Hola! Soy <strong>Ivan Gonzalez</strong> <br /> Desarrollador{" "}
            <strong>FullStack </strong><br />profesional con <br /> pasión por la{" "}
            <strong>aprendizaje</strong>
          </h1>
          <img src={ivanImg} width="" height="300" alt="imagen principal del sitio" />
        </div>
      </section>
    </>
  );
}
