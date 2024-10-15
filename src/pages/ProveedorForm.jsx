import React, { useState } from 'react';

function ProveedorForm() {
  const [formData, setFormData] = useState({
    nombreEmpresa: '',
    correo: '',
    telefono: '',
    productos: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al backend para registrar o actualizar al proveedor
    console.log('Datos del proveedor:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Proveedor</h2>
      <div>
        <label>Nombre de la Empresa:</label>
        <input
          type="text"
          name="nombreEmpresa"
          value={formData.nombreEmpresa}
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
        <label>Teléfono:</label>
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Productos o Servicios Ofrecidos:</label>
        <textarea
          name="productos"
          value={formData.productos}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Registrar Proveedor</button>
    </form>
  );
}

export default ProveedorForm;