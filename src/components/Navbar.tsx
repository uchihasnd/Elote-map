import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";

export default function Navbar() {
  return (
    <nav className="navbar flex-column">
      <div className="nav-element">
        <img src="/Icono/Mazorca.png" alt="Elote Map logo" className="icon" />
      </div>
      <div className="nav-element">
        <ul className="flex-column flex">
          <li className="button-nav">
            <a href="./" className="green-text">
              Inicio
            </a>
          </li>
          <li className="button-nav">
            <Link to="/business" className="green-text">
              Mis negocios
            </Link>
            {/* <a href="#" className="green-text">
              Mis negocios
            </a> */}
          </li>
          <li className="button-nav">
            <Link to="/comments" className="green-text">
              Mis comentarios
            </Link>
          </li>
          <li className="button-nav">
            <ModalLogin />
          </li>
        </ul>
      </div>
    </nav>
  );
}
