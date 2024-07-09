// LinkComponent.js
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./Link.styles"; // ajusta la ruta según tu estructura de archivos

function LinkComponent() {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <Link to="/" className={classes.navLink}>
            Inicio
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/news" className={classes.navLink}>
            Noticias
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/contacts" className={classes.navLink}>
            contactos
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/chutillos" className={classes.navLink}>
            Chutillos
          </Link>
        </li>
        <li className={classes.navItem}>
          <Link to="/routes" className={classes.navLink}>
            Rutas Turísticas
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LinkComponent;
