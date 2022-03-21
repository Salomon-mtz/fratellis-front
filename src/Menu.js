import { ReactComponent as Logo } from './fratellis.svg'
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { useState } from 'react';

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
      <Link
        className={`nav-link ${match ? "active" : ""}`}
        to={to}
        {...props}
      >
        {children}
      </Link>
  );
}

function Menu(){
  const [collapsed, toggleCollapsed] = useState(false);

  function handleToggle() {
    toggleCollapsed(!collapsed);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-menu">
      <div className="container-fluid justify-content-end">
        <Link className="navbar-brand" to="/">
          <Logo width="40px" />
        </Link>
        <button onClick={handleToggle} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#fratellisMenu" aria-controls="fratellisMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse justify-content-center collapse ${collapsed ? "show" : ""}`} id="fratellisMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/paquetes">Paquetes</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/nosotros">Nosotros</CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink to="/contacto">Contacto</CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;