import { useContext } from "react";
import { BurgerMenuContext } from "../../contexts/BurgerMenu";
import { Link } from "react-router-dom";
import "./styles.css";

export function Menu() {
  const { showMenu, setShowMenu } = useContext(BurgerMenuContext);

  return (
    <nav className="menu fadeInDown">
      <ol>
        <li>
          <a
            className="link"
            href="#portafolio"
            onClick={() => setShowMenu(!showMenu)}
          >
            Portafolio
          </a>
        </li>
        <li>
          <a
            className="link"
            href="#experiencia"
            onClick={() => setShowMenu(!showMenu)}
          >
            Experiencia
          </a>
        </li>
        <li>
          <Link className="link" to="/certificate">
            Certificados
          </Link>
        </li>
        <li>
          <a
            className="link"
            href="#contacto"
            onClick={() => setShowMenu(!showMenu)}
          >
            Trabajemos juntos
          </a>
        </li>
      </ol>
    </nav>
  );
}
