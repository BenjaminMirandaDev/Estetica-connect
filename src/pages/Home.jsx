import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
          {/* Hero Section */}
          <section className="hero h-screen text-white">
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Conecta con los mejores profesionales de la estética</h1>
                <p className="text-lg md:text-2xl mb-8">Agenda tus citas fácilmente y descubre servicios exclusivos.</p>
                <a href="/signup" className="bg-blue-600 px-6 py-3 text-lg rounded-md hover:bg-blue-700">Regístrate Ahora</a>
              </div>
            </div>
          </section>

      {/* Descripción de Servicios */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">¿Por qué elegir Estética-Connect?</h2>
          <p className="text-lg mb-6">Ofrecemos una plataforma donde podrás encontrar y conectarte con los mejores profesionales del mundo de la estética, personalizando tu experiencia y gestionando tus citas de manera rápida y sencilla.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Profesionales Verificados</h3>
              <p>Todos nuestros profesionales son seleccionados cuidadosamente para garantizar la mejor calidad en sus servicios.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Fácil de Usar</h3>
              <p>Con nuestro sistema de agendamiento, puedes reservar citas en minutos desde la comodidad de tu hogar.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Variedad de Servicios</h3>
              <p>Encuentra una amplia gama de servicios estéticos, desde tratamientos faciales hasta procedimientos más avanzados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">"Estética-Connect me ha facilitado encontrar profesionales confiables para mis tratamientos. ¡Lo recomiendo 100%!"</p>
              <p className="mt-4 text-right font-bold">- Maria López</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">"Reservar citas nunca fue tan fácil. Ahora puedo gestionar mis citas con un par de clics."</p>
              <p className="mt-4 text-right font-bold">- Juan Pérez</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">"Excelente plataforma, me ha ayudado a expandir mi clientela y ofrecer mis servicios de manera eficiente."</p>
              <p className="mt-4 text-right font-bold">- Carolina Torres</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Estética-Connect. Todos los derechos reservados.</p>
          <p>Síguenos en <a href="#" className="underline hover:no-underline">Facebook</a>, <a href="#" className="underline hover:no-underline">Instagram</a>, y <a href="#" className="underline hover:no-underline">Twitter</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;