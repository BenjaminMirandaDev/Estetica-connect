import React, { useState } from 'react';

function ClienteForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    direccion: '',
    preferencias: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al backend para registrar o actualizar al cliente
    console.log('Datos del cliente:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Cliente</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Correo:</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Dirección:</label>
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Preferencias estéticas:</label>
        <textarea
          name="preferencias"
          value={formData.preferencias}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Registrar Cliente</button>
    </form>
  );
}

export default ClienteForm;