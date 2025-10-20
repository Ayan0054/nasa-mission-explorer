import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/categories', label: 'Categories' },
    { path: '/search', label: 'Search' },
    { path: '/chatbot', label: 'ChatBot' },
    { path: '/insights', label: 'Insights' },
    { path: '/dashboard', label: 'Dashboard' }
  ];

  const linkStyle = {
    display: 'block',
    padding: '15px 20px',
    textDecoration: 'none',
    color: 'var(--text-secondary)',
    transition: 'all 0.3s ease',
    borderLeft: '3px solid transparent'
  };
  
  const activeLinkStyle = {
    ...linkStyle,
    color: 'var(--accent-primary)',
    borderLeft: '3px solid var(--accent-primary)',
    background: 'var(--nav-active-bg)'
  };

  const navContainerStyle = {
    position: 'fixed',
    left: isOpen ? '0' : '-250px',
    top: 0,
    height: '100vh',
    width: '200px',
    background: 'var(--nav-bg)',
    backdropFilter: 'blur(10px)',
    borderRight: '1px solid var(--border-color)',
    padding: '90px 0 20px 0', // Add top padding to avoid overlap with toggle button
    zIndex: 1000,
    transition: 'left 0.3s ease'
  };

  const menuToggleButtonStyle = {
    position: 'fixed',
    left: '20px',
    top: '20px',
    background: 'var(--accent-primary-opacity)',
    color: 'var(--text-primary)',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 1001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
  };

  const themeToggleButtonStyle = {
    position: 'fixed',
    right: '20px',
    top: '20px',
    background: 'var(--accent-primary-opacity)',
    color: 'var(--text-primary)',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 1001,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
  };

  const navItemsStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const navItemStyle = {
    width: '100%',
    textAlign: 'left',
    margin: '5px 0'
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={menuToggleButtonStyle}
      >
        ☰
      </button>
      <button 
        onClick={toggleTheme}
        style={themeToggleButtonStyle}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <nav style={navContainerStyle}>
        <ul style={navItemsStyle}>
          {navItems.map((item) => (
            <li key={item.path} style={navItemStyle}>
              <Link 
                to={item.path} 
                style={location.pathname === item.path ? activeLinkStyle : linkStyle}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;