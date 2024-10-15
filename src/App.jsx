import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Agenda from './pages/Agenda';  // Importa el componente Agenda
import Login from './pages/Login';
import Signup from './pages/Signup';
import ClienteForm from './pages/ClienteForm.jsx'; // Componente para el formulario de clientes
import ProfesionalForm from './pages/ProfesionalForm'; // Componente para el formulario de profesionales
import ProveedorForm from './pages/ProveedorForm'; // Componente para el formulario de proveedores

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} /> {/* Nueva ruta para Agenda */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/clientes" element={<ClienteForm />} /> {/* Registro Clientes */}
          <Route path="/profesionales" element={<ProfesionalForm />} /> {/* Registro Profesionales */}
          <Route path="/proveedores" element={<ProveedorForm />} /> {/* Registro Proveedores */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;