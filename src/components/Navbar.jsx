import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Estética-Connect</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/login" className="hover:underline">Login</a></li>
          <li><a href="/signup" className="hover:underline">Signup</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;