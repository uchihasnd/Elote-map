import ModalLogin from "./ModalLogin";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-element">
        <img src="/Icono/Mazorca.png" alt="Elote Map logo" className="icon" />
      </div>
      <div className="nav-element">
        <ul>
          <li className="button-nav">
            <a href="#" className="green-text">
              Mis negocios
            </a>
          </li>
          <li className="button-nav">
            <a href="#" className="green-text">
              Mis comentarios
            </a>
          </li>
          <li className="button-nav">
            {/* <a className="green-text">
              Iniciar sesión
            </a> */}
            <ModalLogin />
          </li>
        </ul>
      </div>
    </nav>
  );
}
