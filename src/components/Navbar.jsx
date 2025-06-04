import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mi Asistente</div>
      <ul className="navbar-links">
        <li><a href="#acerca">Acerca de</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
