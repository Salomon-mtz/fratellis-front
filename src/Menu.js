import { ReactComponent as Logo } from './fratellis.svg'
import { Link } from 'react-router-dom';

function Menu(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-menu">
      <div className="container-fluid justify-content-end">
        <Link className="navbar-brand" to="/">
          <Logo width="40px" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/paquetes">Paquetes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;