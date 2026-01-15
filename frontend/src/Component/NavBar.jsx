import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyJob</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-blue-600 flex flex-col items-center md:hidden">
          <li className="py-2"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li className="py-2"><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li className="py-2"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
