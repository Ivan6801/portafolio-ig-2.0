import "./styles.css";
import { useContext } from "react";
import { BurgerMenuContext } from "../../contexts/BurgerMenu";
import { Menu } from "../Menu";
import IvanGonzalez from "../../assets/images/Ivan-Gonzalez.png";

export function Header() {
  const { showMenu, setShowMenu } = useContext(BurgerMenuContext);

  let menu;

  if (showMenu) {
    menu = <Menu />;
  }
  return (
    <>
      <i
        onClick={() => setShowMenu(!showMenu)}
        className="icon-menu burger-button"
        id="burger-menu"
      ></i>
      {menu}
      <header className="header">
        <div className="container">
          <figure className="logo">
            <img src={IvanGonzalez} height="50" alt="Logo de Ivan" />
          </figure>
          <nav className="menu-container">
            <ol>
              <li>
                <a className="link" href="#portafolio">
                  Portafolio
                </a>
              </li>
              <li>
                <a className="link" href="#experiencia">
                  Experiencia
                </a>
              </li>
              <li>
                <a className="link" href="">
                  Certificados
                </a>
              </li>
              <li>
                <a className="link" href="#contacto">
                  Trabajemos juntos
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </header>
    </>
  );
}
