import { Link } from "react-router-dom";

export function MenuCertificate() {
  return (
    <nav className="menu fadeInDown">
      <ol>
        <li>
          <Link className="link" to="/">
            Portafolio
          </Link>
        </li>
        <li>
          <Link className="link" to="/">
            Experiencia
          </Link>
        </li>
        <li>
          <Link className="link" to="/certificate">
            Certificados
          </Link>
        </li>
        <li>
          <Link className="link" to="/">
            Trabajemos juntos
          </Link>
        </li>
      </ol>
    </nav>
  );
}
