import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className="container">
      <img src={Logo} alt="Logo" className="logo" />

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={handleToggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Regular Navbar List */}
      <ul className="nav-links">
        <li><Link to="hero-text" smooth={!0} offset={-500} duration={500}><button className="btn">Home</button></Link></li>
        <li><Link to="about" smooth={!0} offset={-170} duration={500}><button className="btn">About</button></Link></li>
        <li><Link to="serviceTitle" smooth={!0} offset={-170} duration={500}><button className="btn">Services</button></Link></li>
        <li><Link to="tarotTitle" smooth={!0} offset={-170} duration={500}><button className="btn">Reading</button></Link></li>
        <li><Link to="contactTitle" smooth={!0} offset={-170} duration={500}><button className="btn">Contact</button></Link></li>
      </ul>

      {/* Sidebar Drawer */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <span className="close-btn" onClick={handleCloseSidebar}>&times;</span>
        <ul>
          <li><Link onClick={handleCloseSidebar} to="hero-text" smooth={!0} offset={-500} duration={500}><button className="btn">Home</button></Link></li>
          <li><Link onClick={handleCloseSidebar} to="about" smooth={!0} offset={-170} duration={500}><button className="btn">About</button></Link></li>
          <li><Link onClick={handleCloseSidebar} to="serviceTitle" smooth={!0} offset={-170} duration={500}><button className="btn">Services</button></Link></li>
          <li><Link onClick={handleCloseSidebar} to="tarotTitle" smooth={!0} offset={-170} duration={500}><button className="btn">Reading</button></Link></li>
          <li><Link onClick={handleCloseSidebar} to="contactTitle" smooth={!0} offset={-170} duration={500}><button className="btn">Contact</button></Link></li>
        </ul>
      </div>
      
      {/* Optional overlay for when sidebar is open */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={handleCloseSidebar} />}
    </nav>
  )
}

export default Navbar;
