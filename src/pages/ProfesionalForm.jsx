import React, { useState } from 'react';

function ProfesionalForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    especialidad: '',
    experiencia: '',
    disponibilidad: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al backend para registrar o actualizar al profesional
    console.log('Datos del profesional:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Profesional</h2>
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
        <label>Especialidad:</label>
        <input
          type="text"
          name="especialidad"
          value={formData.especialidad}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Años de experiencia:</label>
        <input
          type="number"
          name="experiencia"
          value={formData.experiencia}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Disponibilidad:</label>
        <textarea
          name="disponibilidad"
          value={formData.disponibilidad}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Registrar Profesional</button>
    </form>
  );
}

export default ProfesionalForm;