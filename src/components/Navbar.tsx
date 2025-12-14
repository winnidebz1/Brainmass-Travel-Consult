import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <Globe className="logo-icon" />
          <span>Brainmass</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-links ${isActive('/')}`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-links ${isActive('/about')}`} onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className={`nav-links ${isActive('/services')}`} onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/packages" className={`nav-links ${isActive('/packages')}`} onClick={closeMenu}>
              Travel Packages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links btn-contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
