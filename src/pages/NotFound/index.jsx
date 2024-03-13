import Found from "../../assets/images/Not Found _Isometric.svg";
import { Link } from "react-router-dom";
import "./styles.css";

export function NotFound() {
  return (
    <div className="NotFound">
      <img className="NotFound-image" src={Found} alt="" />
      <button id="button_go_back" type="button">
        <Link className="NotFound-link" to="/">
          Regresa
        </Link>
      </button>
    </div>
  );
}
