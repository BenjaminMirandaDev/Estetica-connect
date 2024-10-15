import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-lg font-bold">Estética-Connect</Link>
        <div>
          <Link to="/" className="mr-4">Inicio</Link>
          <Link to="/agenda" className="mr-4">Agenda</Link> {/* Nuevo enlace a la Agenda */}
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/signup">Crear Sesión</Link>
          <Link to="/clientes">Perfil usuario</Link>
          <Link to="/profesionales">Perfil profesional</Link>
          <Link to="/proveedores">Perfil proveedor</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;