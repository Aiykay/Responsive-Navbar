import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Optional: Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-container">
        {/* Logo */}
        <a href="#" className="nav-logo">Khay's Brand</a>

        {/* Hamburger Icon */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#" onClick={handleLinkClick}>About</a></li>
          <li><a href="#" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#" onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;