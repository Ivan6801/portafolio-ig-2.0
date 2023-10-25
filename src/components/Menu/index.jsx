import "./styles.css";

export function Menu() {
  return (
    <nav className="menu fadeInDown">
      <ol>
        <li>
          <a className="link" href="#portafolio">
            Portafolio
          </a>
        </li>
        {/* <li>
          <a className="link" href="#experiencia">
            Experiencia
          </a>
        </li> */}
        {/* <li>
          <a className="link" href="/certificados">
            Certificados
          </a>
        </li> */}
        <li>
          <a className="link" href="#contacto">
            Trabajemos juntos
          </a>
        </li>
      </ol>
    </nav>
  );
}
