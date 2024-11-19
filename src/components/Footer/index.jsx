import ivanimgfooter from "../../assets/images/Ivan-Gonzalez.png";
import "./styles.css";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div>
            <p className="p-3">
              Desarrollo web online 2020 - 2025
              <br />
              <br />
              <img src={ivanimgfooter} width="300" alt="platzi" />
            </p>
          </div>
          <div>
            <p>Diseñado con 💓 por Ivan Gonzalez Gonzalez</p>
            <br />
            <p>Version: 3.1</p>
            <br />
          </div>
        </div>
      </footer>
    </>
  );
}
